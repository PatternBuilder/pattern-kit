<?php
/**
 * @file SchemaControllerProvider.php
 */

namespace PatternKit;

use Silex\Application;
use Silex\ControllerProviderInterface;
use Symfony\Component\Yaml\Yaml;

/**
 * Class SchemaControllerProvider
 *
 * @package PatternKit
 */
class SchemaControllerProvider implements ControllerProviderInterface {
  /**
   * Creates a new controller based on the default route.
   *
   * @param \Silex\Application $app
   *
   * @return mixed
   */
  public function connect(Application $app) {
    $controllers = $app['controllers_factory'];

    $controllers->get('/{pattern}', function ($pattern) use ($app) {

      $retriever     = new \JsonSchema\Uri\UriRetriever;
      $path          = get_asset_path($pattern, 'schemas');
      $seed_path     = get_asset_path($pattern, 'data');
      $template_path = get_asset_path($pattern, 'templates');
      $docs_path     = get_asset_path($pattern, 'docs');
      $data          = array();

      $schema = $retriever->retrieve('file://' . realpath($path));

      // Navigation
      $data['nav'] = getNav($pattern);
      if (array_key_exists('sg', $app["config"]["paths"])) {
        $data['nav']['sg_active'] = TRUE;
      }
      // end navigation

      if ($seed_path) {
        $seed_file = file_get_contents('file://' . realpath($seed_path));
        if (($pathinfo = pathinfo($seed_path)) && isset($pathinfo['extension']) && $pathinfo['extension'] == 'yaml') {
          $seed_data = Yaml::parse($seed_file);
        }
        elseif (!empty($seed_file)) {
          $seed_data = json_decode($seed_file, TRUE);
        }
        else {
          $seed_data = array();
        }
        data_replace($seed_data);
      }
      else {
        $seed_data = array();
      }

      $refResolver            = new \JsonSchema\RefResolver($retriever);
      $refResolver::$maxDepth = 9999;
      $refResolver->resolve($schema);

      if (isset($app['config'])) {
        $data["app_config"] = $app['config'];
      }

      $docs_file = file_get_contents('file://' . realpath($docs_path));
      $parser = new \Mni\FrontYAML\Parser;;
      $docs_data = $parser->parse($docs_file);

      $data['docs_yaml']    = $docs_data->getYAML();
      $data['docs_content'] = $docs_data->getContent();

      $data['schema']     = json_encode($schema);
      $data['docs_json']  = (array) $seed_data;
      $data['starting']   = json_encode($seed_data);
      $data['raw_schema'] = (array) json_decode(file_get_contents($path), TRUE);
      if ($template_path) {
        $template_file           = file_get_contents('file://' . realpath($template_path));
        $data['template_markup'] = $template_file;
      }

      return $app['twig']->render("display-schema.twig", $data);

    })->bind('schema');

    $controllers->get('/editor/{pattern}', function ($pattern) use ($app) {

      $retriever     = new \JsonSchema\Uri\UriRetriever;
      $path          = get_asset_path($pattern, 'schemas');
      $seed_path     = get_asset_path($pattern, 'data');
      $template_path = get_asset_path($pattern, 'templates');
      $docs_path     = get_asset_path($pattern, 'docs');
      $data          = array();

      $schema = $retriever->retrieve('file://' . realpath($path));

      // Navigation
      $data['nav'] = getNav($pattern);
      if (array_key_exists('sg', $app["config"]["paths"])) {
        $data['nav']['sg_active'] = TRUE;
      }
      // end navigation

      if ($seed_path) {
        $seed_file = file_get_contents('file://' . realpath($seed_path));
        if (($pathinfo = pathinfo($seed_path)) && isset($pathinfo['extension']) && $pathinfo['extension'] == 'yaml') {
          $seed_data = Yaml::parse($seed_file);
        }
        elseif (!empty($seed_file)) {
          $seed_data = json_decode($seed_file, TRUE);
        }
        else {
          $seed_data = array();
        }
        data_replace($seed_data);
      }
      else {
        $seed_data = array();
      }

      $refResolver            = new \JsonSchema\RefResolver($retriever);
      $refResolver::$maxDepth = 9999;
      $refResolver->resolve($schema);

      if (isset($app['config'])) {
        $data["app_config"] = $app['config'];
      }

      $docs_file = file_get_contents('file://' . realpath($docs_path));
      $parser = new \Mni\FrontYAML\Parser;;
      $docs_data = $parser->parse($docs_file);

      $data['docs_yaml']    = $docs_data->getYAML();
      $data['docs_content'] = $docs_data->getContent();

      $data['schema']     = json_encode($schema);
      $data['docs_json']  = (array) $seed_data;
      $data['starting']   = json_encode($seed_data);
      $data['raw_schema'] = (array) json_decode(file_get_contents($path), TRUE);
      if ($template_path) {
        $template_file           = file_get_contents('file://' . realpath($template_path));
        $data['template_markup'] = $template_file;
      }

      return $app['twig']->render("display-just-schema-editor.twig", $data);

    })->bind('schema-editor');

    return $controllers;
  }


}

#