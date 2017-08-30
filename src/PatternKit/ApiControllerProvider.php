<?php
/**
 * @file ApiControllerProvider.php
 */

namespace PatternKit;

use PatternKit\Factory\PatternFactory;
use Silex\Application;
use Silex\ControllerCollection;
use Silex\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ApiControllerProvider
 *
 * @package PatternKit
 */
class ApiControllerProvider implements ControllerProviderInterface
{
    /**
     * Creates a new controller based on the default route.
     *
     * @param \Silex\Application $app
     *
     * @return mixed
     */
    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        // Render callback.
        $controllers->post(
          '/render/{target}',
          function (Request $request, $target) use ($app) {
              return $this->render_pattern($app, $request, $target);
          }
        )
          ->assert('target', ".*")
          ->method('GET|POST');

        // Render callback.
        $controllers->get(
          '/serve/csscomponent/{pattern_name}/{style_name}',
          function (Request $request, $pattern_name, $style_name) use ($app) {
              return $this->render_csscomponent(
                $app,
                $request,
                $pattern_name,
                $style_name
              );
          }
        )->method('GET|POST');

        // JSON validation endpoint.
        $controllers->post(
          '/validate',
          function (Request $request) use ($app) {
              if (0 === strpos(
                  $request->headers->get('Content-Type'),
                  'application/json'
                )
              ) {

                  /**
                   * @param        $data
                   * @param        $to_test
                   * @param int $i
                   * @param string $path
                   */
                  function traverse($data, &$to_test, $i = 0, $path = "root")
                  {
                      foreach ($data as $array_name => &$value) {
                          if (is_array($value)) {
                              foreach ($value as $key => $item) {
                                  if (is_object($item)) {
                                      if ($item->name) {
                                          $location = $path.".".$array_name.".".$key;
                                          $to_test[] = [
                                            "depth" => $i,
                                            "obj"   => $item,
                                            "path"  => $location,
                                          ];
                                      }
                                      traverse(
                                        $item,
                                        $to_test,
                                        $i + 1,
                                        $location
                                      );
                                  }
                              }
                          }
                      }
                      usort(
                        $to_test,
                        function ($a, $b) {
                            return $b['depth'] - $a['depth'];
                        }
                      );
                  }

                  /**
                   * Validate JSON schema against the indicated schema.
                   *
                   * @param array $data
                   *   Array of items to validate.
                   * @param string $reply
                   *   HTML ready string containing the list of errors or success.
                   */
                  function test($data, &$reply)
                  {
                      $retriever = new \JsonSchema\Uri\UriRetriever;
                      $refResolver = new \JsonSchema\RefResolver(
                        $retriever
                      );
                      $refResolver::$maxDepth = 9999;
                      $validator = new \JsonSchema\Validator();

                      foreach ($data as $item) {
                          $patternObj = new PatternModel($item['obj']->name);
                          $schema = $patternObj->getSchema();

                          //Validate
                          $validator->check($item['obj'], $schema);

                          if (!$validator->isValid()) {
                              foreach ($validator->getErrors() as $error) {
                                  $path = $item['path'];
                                  $name = $item['obj']->name;
                                  $property = $error['property'];
                                  $message = $error['message'];
                                  $reply .= sprintf(
                                    "Error at %s: <br> %s [%s] %s\n <br><br>",
                                    $path,
                                    $name,
                                    $property,
                                    $message
                                  );
                              }
                              break;
                          }
                      }
                  }

                  // Parse the data coming from the POST.
                  $data = (object)json_decode($request->getContent());

                  if (empty($data->name)) {
                      $reply['status'] = 'FAILED';
                      $reply['message'] = "The supplied JSON failed to validate.";

                      return json_encode($reply);
                  }

                  $patternObj = PatternFactory::getPattern($data->name);

                  $to_test = [];
                  $reply = [];
                  $validator = new \JsonSchema\Validator();


                  // Load the schema for this element.
                  $schema = $patternObj->getSchema();

                  //Validate
                  $validator->check($data, $schema);

                  if ($validator->isValid()) {
                      $reply['status'] = 'OK';
                      $reply['message'] = "The supplied JSON validates against the schema.\n";
                      $reply['gzconfig'] = base64_encode(
                        gzcompress(json_encode($data))
                      );
                  } else {
                      $to_test[] = [
                        "depth" => 0,
                        "obj"   => $data,
                        "path"  => "root",
                      ];
                      traverse($data, $to_test);
                      test($to_test, $reply);
                  }

                  return json_encode($reply);
              }
          }
        );

        // Pattern list callback.
        $controllers->get(
          '/patterns',
          function () use ($app) {
              $list = listPatterns();
              $response = new JsonResponse($list);
              $response->headers->set('Content-Type', 'application/json');

              return $response;
          }
        );

        return $controllers;
    }


    /**
     * Render a pattern of interest.
     *
     * @param \Silex\Application $app
     *   The reference to the app.
     * @param \Symfony\Component\HttpFoundation\Request $request
     *   The request object.
     * @param string $target
     *   The pattern name of interest.
     *
     * @return string|\Symfony\Component\HttpFoundation\Response
     */
    public function render_pattern(Application $app, Request $request, $target)
    {
        $patternObj = null;
        $contents = [];
        $pattern = null;

        // If there's a slash in the url, assume pattern has been passed.
        if (strpos($target, '/') !== false) {
            list($target, $pattern) = explode('/', $target);
            $contents['name'] = $pattern;
        }

        switch ($request->getMethod()) {
            case 'POST':
                // Read the POST data (if available).
                $contents = json_decode($request->getContent(), true);
                break;

            case 'GET':
                $params = $request->query->all();

                // Use the target and data parameters (if available) to generate config.
                if (!empty($params['template']) || !empty($pattern)) {
                    $pattern = !empty($pattern) ? $pattern : $params['template'];
                    $patternObj = PatternFactory::getPattern(
                      $pattern
                    );
                    $contents = $patternObj->getSeedData();
                }

                // If configuration data is supplied, unencode and apply.
                if (!empty($params['data'])) {
                    $decoded = base64_decode($params['data']);
                    $contents = (array)json_decode(zlib_decode($decoded));
                }

                // If configuration is provided as JSON, apply
                if (!empty($params['jsondata'])) {
                    $contents = (array)json_decode($params['jsondata']);
                }
                break;
        }

        // You must provide a name or template to render.
        if (empty($pattern) && empty($contents['name']) && empty($contents['template'])) {
            // We should provide more information about the failure here.
            // Left as is to avoid disrupting existing dependencies. (if any)
            return "Sorry: Unable to determine the pattern requested.";
        }

        if (empty($pattern)) {
            $pattern = !empty($contents['name']) ? $contents['name'] : $contents['template'];
        }
        if (empty($patternObj)) {
            $patternObj = PatternFactory::getPattern($pattern);
        }

        $asset_data = $patternObj->getAssetData();

        // Generate the list of properties to expose on the pattern.
        $contents['propertylist'] = array_keys($contents);

        // Remove 'name' from the list of properties.
        $name_idx = array_keys($contents['propertylist'], 'name');
        if (!empty($name_idx)) {
            unset($contents['propertylist'][$name_idx[0]]);
        }

        // Add global configuration.
        if (isset($app['config'])) {
            $contents["app_config"] = $app['config'];
        }

        // If we have asset data, feed that to the renderer instead of global.
        if (!empty($asset_data)) {
            // Override globals, this allows backward compatibility.
            $contents['app_config']['assets']['js'] = array_merge(
              $asset_data['js']['early'],
              $asset_data['js']['deferred']
            );
            $contents['app_config']['assets']['css'] = $asset_data['css']['list'];

            // Add all the asset data to the config array.
            $contents['app_config']['assets']['custom'] = $asset_data;
        }

        switch ($target) {
            case "page":
                return $app['twig']->render("basic.twig", $contents);
                break;

            case "html":
                return $app['twig']->render("basic-html.twig", $contents);
                break;

            case 'json':
                // Get the rendered body of the twig template for the response.
                $page_content = $app['twig']->render(
                  "jsonrender.twig",
                  $contents
                );

                // Return a JSON object with all information necessary to render.
                $json = json_encode(
                  (object)[
                    'pattern' => $contents['name'],
                    'assets'  => $contents["app_config"]['assets'],
                    'body'    => $page_content,
                  ],
                  JSON_HEX_QUOT | JSON_HEX_TAG
                );

                return new Response(
                  $json,
                  200,
                  [
                    'Content-Type' => 'application/json',
                  ]
                );
                break;

            case 'webcomponent':

                $contents['host'] = $request->getSchemeAndHttpHost();
                $contents['cssPrefix'] = '/api/serve/csscomponent';
                $contents['pattern'] = $pattern;
                $contents['embeddedCSS'] = '';

                $module_path = dirname(get_asset_path($pattern, 'assets'));
                foreach ($asset_data['css']['list'] as $cssfile) {
                    if (substr($cssfile, 0, 4) == 'http') {
                        continue;
                    }

                    if (substr($cssfile, 0, 2) == './') {
                        $cssfile = $module_path . '/' . substr($cssfile, 2);
                    }
                    $contents['embeddedCSS'] .= file_get_contents($cssfile);
                }

                $contents['dynamicProperties'] = [];
                // If we have dynamic properties, apply them.
                if (!empty($asset_data['dynamic_properties'])) {
                    foreach ($asset_data['dynamic_properties'] as $property) {
                        $contents['dynamicProperties'][$property] = !empty($contents[$property]) ? $contents[$property] : '';
                        //$contents[$property] = "[[$property]]";
                        $contents[$property] = "{{{$property}}}";
                    }
                }

                $contents['componentPolyfill'] = $contents['app_config']['support_assets']['component_polyfill'];
                $page_content = $app['twig']->render(
                  "webcomponent.twig",
                  $contents
                );

                return $page_content;
                break;
        }

        if (!empty($contents["template"])) {
            return $app['twig']->render($contents["template"], $contents);
        } else {
            return $app['twig']->render(
              $contents["name"].'.twig',
              $contents
            );
        }
    }

    /**
     * Render a css component of interest.
     *
     * @param \Silex\Application $app
     *   The reference to the app.
     * @param \Symfony\Component\HttpFoundation\Request $request
     *   The request object.
     * @param string $pattern_name
     *   The machine name of the pattern containing the style.
     * @param string $style_name
     *   The machine name of the style (from manifest).
     *
     * @return string|\Symfony\Component\HttpFoundation\Response
     */
    public function render_csscomponent(
      Application $app,
      Request $request,
      $pattern_name,
      $style_name
    ) {
        $patternObj = null;
        $contents = [];
        $cssBody = '/* Something went wrong. File could not be loaded. */';

        $patternObj = PatternFactory::getPattern($pattern_name);
        $asset_data = $patternObj->getAssetData();
        $module_path = dirname(get_asset_path($pattern_name, 'assets'));

        foreach ($asset_data['css']['shared'] as $asset) {
            if ($style_name == $asset['name']) {
                $filename = $module_path . '/' . trim($asset['src'], './');
                $cssBody = file_get_contents($filename);
            }
        }

        $contents['moduleName'] = "shared-style-$style_name";
        $contents['cssBody'] = $cssBody;
        $contents['componentPolyfill'] = $app['config']['support_assets']['component_polyfill'];

        return $app['twig']->render("csscomponent.twig", $contents);
    }
}
