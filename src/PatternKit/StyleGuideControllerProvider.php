<?php
/**
 * @file StyleGuideControllerProvider.php
 */

namespace PatternKit;

use Silex\Application;
use Silex\ControllerProviderInterface;
use Mni\FrontYAML\Parser;

/**
 * Class StyleGuideControllerProvider
 *
 * @package PatternKit
 */
class StyleGuideControllerProvider implements ControllerProviderInterface
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
          '/',
          function ($pattern) use ($app) {
              return $this->renderer($app, $pattern);
          }
        )->value('pattern', "index")->bind('styleguide-home');

        $controllers->get(
          '/{pattern}',
          function ($pattern) use ($app) {
              return $this->renderer($app, $pattern);
          }
        )->bind('styleguide');

        return $controllers;
    }

    /**
     * Renders the style guide requested.
     *
     * @param Application $app
     *   Reference to the application object.
     * @param string      $pattern
     *   The pattern of interest.
     *
     * @return mixed
     *   Rendered output.
     */
    public function renderer(Application $app, $pattern)
    {
        $sg_path = get_asset_path($pattern, 'sg');
        $sg_file = file_get_contents('file://'.realpath($sg_path));

        $parser  = new Parser();
        $sg_data = $parser->parse($sg_file);

        if (isset($app['config'])) {
            $data["app_config"] = $app['config'];
        }

        $data['secondary_nav'] = getDocNav($pattern);
        $data['nav']           = getNav($pattern);
        $data['sg_yaml']       = $sg_data->getYAML();
        $data['sg_content']    = $sg_data->getContent();

        return $app['twig']->render("display-sg.twig", $data);
    }
}
