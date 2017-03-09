<?php
/**
 * @file ApiControllerProvider.php
 */

namespace PatternKit;

use Silex\Application;
use Silex\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ApiControllerProvider
 *
 * @package PatternKit
 */
class ApiControllerProvider implements ControllerProviderInterface {
  /**
   * Creates a new controller based on the default route.
   *
   * @param \Silex\Application $app
   *
   * @return mixed
   */
  public function connect(Application $app) {
    $controllers = $app['controllers_factory'];

    // Render callback.
    $controllers->post('/render/{target}', function (Request $request, $target) use ($app) {

      if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $contents = json_decode($request->getContent(), TRUE);

        if (isset($app['config'])) {
          $contents["app_config"] = $app['config'];
        }

        if ($target == "page") {
          if ($contents['name'] || $contents['template']) {
            return $app['twig']->render("basic.twig", $contents);
          }
          else {
            return "sorry";
          }
        }

        if (!empty($contents["template"])) {
          return $app['twig']->render($contents["template"], $contents);
        }
        else {
          return $app['twig']->render($contents["name"] . '.twig', $contents);
        }
      }
    });

    // Web component render callback.
    $controllers->post('/wcrender/{target}', function (Request $request, $target) use ($app) {

      if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $contents = json_decode($request->getContent(), TRUE);

        if (isset($app['config'])) {
          $contents["app_config"] = $app['config'];
        }

        if ($target == "page") {
          if ($contents['name'] || $contents['template']) {
            return $app['twig']->render("webcomponent.twig", $contents);
          }
          else {
            return "sorry";
          }
        }

        if (!empty($contents["template"])) {
          return $app['twig']->render($contents["template"], $contents);
        }
        else {
          return $app['twig']->render($contents["name"] . '.twig', $contents);
        }
      }
    });

    // Pattern list callback.
    $controllers->get('/patterns', function () use ($app) {
      $list     = listPatterns();
      $response = new JsonResponse($list);
      $response->headers->set('Content-Type', 'application/json');

      return $response;
    });


    return $controllers;
  }
}

