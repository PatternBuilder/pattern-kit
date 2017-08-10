<?php
/**
 * @file SchemaControllerProvider.php
 */

namespace PatternKit;

use PatternKit\Factory\PatternFactory;
use Silex\Application;
use Silex\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class SchemaControllerProvider
 *
 * @package PatternKit
 */
class SchemaControllerProvider implements ControllerProviderInterface
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

        $controllers->get(
          '/{pattern}',
          function ($pattern) use ($app) {
              $patternObj = PatternFactory::getPattern($pattern);
              $data       = array();

              // Navigation
              $data['nav'] = getNav($pattern);
              if (array_key_exists('sg', $app["config"]["paths"])) {
                  $data['nav']['sg_active'] = true;
              }

              // Pull global app config (if available).
              if (isset($app['config'])) {
                  $data["app_config"] = $app['config'];
              }

              $data['docs_yaml']    = $patternObj->getDocsData()->getYAML();
              $data['docs_content'] = $patternObj->getDocsData()->getContent();
              $data['schema']       = json_encode($patternObj->getSchema());
              $data['docs_json']    = (array)$patternObj->getSeedData();
              $data['starting']     = json_encode($patternObj->getSeedData());
              $data['raw_schema']   = (array)$patternObj->getRawSchema();


              if ($patternObj->getTemplate()) {
                  $data['template_markup'] = $patternObj->getTemplate();
              }

              return $app['twig']->render("display-schema.twig", $data);
          }
        )->bind('schema');

        $controllers->match(
          '/editor/{pattern}',
          function (Request $request, $pattern) use ($app) {
              $data = [];

              $patternObj = PatternFactory::getPattern($pattern);

              $schema = $patternObj->getSchema();

              // Navigation
              $data['nav'] = getNav($pattern);
              if (array_key_exists('sg', $app["config"]["paths"])) {
                  $data['nav']['sg_active'] = true;
              }
              // end navigation


              // Get the default values for the various config elements.
              $seed_data = $patternObj->getSeedData();

              // Use the values provided (if available) to override defaults.
              $raw_json = $request->getContent();
              if (!empty($raw_json)) {
                  $seed_data = $raw_json;
              }

              // Apply global configuration.
              if (isset($app['config'])) {
                  $data["app_config"] = $app['config'];
              }

              $docs_data = $patternObj->getDocsData();
              $data['docs_yaml'] = $docs_data->getYAML();
              $data['docs_content'] = $docs_data->getContent();

              $data['schema'] = json_encode($schema);
              $data['docs_json'] = (array)$seed_data;
              $data['starting']   = json_encode($seed_data);
              $data['raw_schema'] = (array)$patternObj->getRawSchema();

              if ($patternObj->getTemplate()) {
                  $data['template_markup'] = $patternObj->getTemplate();
              }

              return $app['twig']->render(
                "display-just-schema-editor.twig",
                $data
              );
          }
        )
          // Supporting GET/POST for easier debugging.
                    ->method('GET|POST')
                    ->bind('schema-editor');

        return $controllers;
    }
}

#
