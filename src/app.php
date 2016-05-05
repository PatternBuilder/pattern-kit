<?php

use Silex\Application;
use Silex\Provider\HttpCacheServiceProvider;
use Silex\Provider\MonologServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use DerAlex\Silex\YamlConfigServiceProvider;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use PatternKit\RoutesLoader;
use Carbon\Carbon;
use Mni\FrontYAML\Parser;



date_default_timezone_set('America/Los_Angeles');

define("ROOT_PATH", __DIR__ . "/..");


$app = new Application();
$app->register(new YamlConfigServiceProvider("./.pk-config.yml"));


//handling CORS preflight request
$app->before(function (Request $request) {
   if ($request->getMethod() === "OPTIONS") {
       $response = new Response();
       $response->headers->set("Access-Control-Allow-Origin","*");
       $response->headers->set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
       $response->headers->set("Access-Control-Allow-Headers","Content-Type");
       $response->setStatusCode(200);
       return $response->send();
   }
}, Application::EARLY_EVENT);

//handling CORS respons with right headers
$app->after(function (Request $request, Response $response) {
   $response->headers->set("Access-Control-Allow-Origin","*");
   $response->headers->set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
});

// //accepting JSON
// $app->before(function (Request $request) {
//     if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
//         $data = json_decode($request->getContent(), true);
//         $request->request->replace(is_array($data) ? $data : array());
//     }
// });

$app->register(new ServiceControllerServiceProvider());

$app->register(new HttpCacheServiceProvider(), array("http_cache.cache_dir" => ROOT_PATH . "/storage/cache",));

$app->register(new MonologServiceProvider(), array(
    "monolog.logfile" => ROOT_PATH . "/storage/logs/" . Carbon::now('America/Los_Angeles')->format("Y-m-d") . ".log",
    "monolog.name" => "application"
));



 //load routes
 // $routesLoader = new RoutesLoader($app);
 // $routesLoader->bindRoutesToControllers();


$template_paths = array();

array_push($template_paths, ROOT_PATH . '/resources/templates');

if (is_string($app['config']['paths']['templates'])) {
    array_push($template_paths, realpath('./' . $app['config']['paths']['templates']) );
}
elseif (is_array($app['config']['paths']['templates'])) {
    foreach ($app['config']['paths']['templates'] as $value) {
        array_push($template_paths, realpath('./' . $value));
    }
}


$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => $template_paths,
    'twig.options' => array(
        'strict_variables' => false
        ),
));



$app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
    $twig->addGlobal('pi', 3.14);
    return $twig;
}));


function get_asset_path($name, $type) {
    global $app;

    if (in_array($type, array("templates", "data", "schemas", "docs", "sg"))) {
        $return = NULL;
        $paths = $app['config']['paths'][$type];

        if ($paths) {
            foreach ($paths as $path) {
                $extension = $app['config']['extensions'][$type];
                $dir =  './' . $path;
                $file_path = "{$dir}/{$name}{$extension}";
                if (is_dir($dir) && is_readable($file_path)) {
                    $return = $file_path;
                    break;
                }
            }
        }

        return $return;
    }
    else {
        throw new Exception($type . ' is not equal to template, data or schema');
    }
}

function getDocNav($pattern) {
    global $app;
    $nav = array();
    $parser = new Parser();

    foreach ($app['config']['paths']['sg'] as $path) {
        $files = glob('./' . $path .'/*' . $app['config']['extensions']['sg']);
        foreach ($files as $value) {
            $value_parts = str_split(basename($value), strpos(basename($value), "."));
            $nav_item = array();
            $sg_file = file_get_contents($value);
            $sg_data = $parser->parse($sg_file);
            $data['sg_yaml'] = $sg_data->getYAML();
            $nav_item['title'] = $data['sg_yaml']['title'];
            $nav_item['path'] = '/sg/' . $value_parts[0];
            if ($value_parts[0] == $pattern) {
                $nav_item['active'] = true;
            }
            if ($value_parts[0] == 'index') {
                $nav_item['path'] = '/sg';
                array_unshift($nav, $nav_item);
            }
            else {
                $nav[] =  $nav_item;
            }
        }
    }
    return $nav;
}

function getNav($pattern) {
  global $app;
  $categories = $app['config']['categories'];
  $schema_paths = array();
  $nav = array();
  $nav['title'] = $app['config']['title'];

  foreach ($app['config']['paths']['schemas'] as $path) {
    $files = scandir("./" . $path);
    $schema_paths[] = array(
        'location' => $path,
        'files' => $files
      );
  }

  if ($categories) {
      foreach ($categories as $category) {
        $value = strtolower(str_replace(' ', '_', $category));
        $nav['categories'][$value] = array();
        $nav['categories'][$value]['title'] = $category;
        $nav['categories'][$value]['path'] = '/' . $value;
      }
  }


  foreach ($schema_paths as $path) {
    foreach ($path['files'] as $file) {
      if (strpos($file, 'json') !== false) {
        $nav_item = array();
        $contents = json_decode(file_get_contents('./' . $path['location'] . "/" . $file), true);
        $contents['name'] = substr($file, 0, -5);
        $category = isset($contents['category']) ? $contents['category'] : false;
        $nav_item['title'] = isset($contents['title']) ? $contents['title'] : $contents['name'];
        $nav_item['path'] = '/schema/'. $contents['name'];
        if ($contents['name'] == $pattern) {
            $nav_item['active'] = true;
        }
        if ($category) {
            $nav['categories'][$category]['items'][] = $nav_item;
        }

      }
    }
  }
  return $nav;
}


$app['debug'] = true;


$app->get('/', function () use ($app) {
    $data = array();
    $data['nav'] = getNav('/');
    return $app['twig']->render("display-schema.twig", $data);
});

$app->get('icons', function () use ($app) {
    $data = array('foo' => 'bar');
    return $app['twig']->render("icons.twig", $data);
});


$app->get('tests/{name}/{data_array}', function ($name, $data_array) use ($app) {

    $data_path = get_asset_path($name, "data");

    if (file_exists($data_path)) {
        $file_data = json_decode(file_get_contents($data_path), true);
    }
    else {
        trigger_error($name . " is missing an associated data file. Create " . $name . ".tests.json in the " . $name . "/library folder. </br></br>");
        exit;
    }

    // Test if array of tests data
    if (array_keys($file_data) == range(0, count($file_data) - 1)) {
        $file_data = $file_data[$data_array]["data"];
    }

    if ($file_data['name'] || $file_data['template']) {
        if (isset($app['config'])) {
            $file_data["app_config"] = $app['config'];
        }
        return $app['twig']->render("basic.twig", $file_data);
    }
    else {
        trigger_error($name . ".tests.json is missing a name or template value.</br></br>");
        exit;
    }

})
->value('data_array', 0);



// $app->get('/{category}', function ($category) use ($app) {

//     if (in_array($category, $app['config']['categories']) ) {
//         foreach ($app['config']['paths']['schemas'] as $path) {
//           $files = scandir("./" . $path);
//           foreach ($files as $file) {
//               $contents = json_decode(file_get_contents('./' . $path . "/" . $file), true);

//           }
//         }
//     }

//     return $app['twig']->render("display-schema.twig", $data);
// }



$app->get('sg/{pattern}', function ($pattern) use ($app) {


    $sg_path = get_asset_path($pattern, 'sg');

    $sg_file = file_get_contents('file://' . realpath($sg_path));

    $parser = new Parser();

    $sg_data = $parser->parse($sg_file);

    if (isset($app['config'])) {
        $data["app_config"] = $app['config'];
    }


    $data['secondary_nav'] = getDocNav($pattern);
    $data['nav']= getNav($pattern);
    $data['sg_yaml'] = $sg_data->getYAML();
    $data['sg_content'] = $sg_data->getContent();

    return $app['twig']->render("display-sg.twig", $data);
})->value('pattern', "index");


$app->get('schema/{pattern}', function ($pattern) use ($app) {

    $retriever = new JsonSchema\Uri\UriRetriever;
    $path = get_asset_path($pattern, 'schemas');
    $seed_path = get_asset_path($pattern, 'data');
    $template_path = get_asset_path($pattern, 'templates');
    $docs_path = get_asset_path($pattern, 'docs');
    $data = array();



    $schema = $retriever->retrieve('file://' . realpath($path));

    // Navigation
    $data['nav']= getNav($pattern);
    if (array_key_exists('sg', $app["config"]["paths"])) {
        $data['nav']['sg_active'] = true;
    }
    // end navigation

    if ($seed_path) {
        $seed_file = $retriever->retrieve('file://' . realpath($seed_path));
        if (!empty($seed_file)) {
          $seed_data = $seed_file;
        }
        else {
          $seed_data = array();
        }
    }
    else $seed_data = array();


    $refResolver = new JsonSchema\RefResolver($retriever);
    $refResolver::$maxDepth = 9999;
    $refResolver->resolve($schema);

    if (isset($app['config'])) {
        $data["app_config"] = $app['config'];
    }


    $docs_file = file_get_contents('file://' . realpath($docs_path));

    $parser = new Parser();

    $docs_data = $parser->parse($docs_file);

    $data['docs_yaml'] = $docs_data->getYAML();
    $data['docs_content'] = $docs_data->getContent();

    $data['schema'] = json_encode($schema);
    $data['docs_json'] = (array) $seed_data;
    $data['starting'] = json_encode($seed_data);
    $data['raw_schema'] = (array) json_decode(file_get_contents($path), true);
    if ($template_path) {
        $template_file = file_get_contents('file://' . realpath($template_path));
        $data['template_markup'] = $template_file;

    }

    return $app['twig']->render("display-schema.twig", $data);

});


$app->post('/render/{target}', function (Request $request, $target) use ($app) {

    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {

        $contents = json_decode($request->getContent(), true);

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



$app->post('/validate', function (Request $request) use ($app) {

    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {

        function traverse($data, &$to_test, $i=0, $path="root") {
            foreach ($data as $key => &$value) {
                if (is_array($value)) {
                    $array_name = $key;
                    foreach ($value as $key=>$item) {
                        if (is_object($item)) {
                            if ($item->name) {
                                $location = $path . "." . $array_name . "." . $key;
                                $to_test[] = array("depth" => $i, "obj" => $item, "path" => $location);
                            }
                            traverse($item, $to_test, $i+1, $location);
                        }
                    }
                }
            }
            usort($to_test, function($a, $b) {
                return $b['depth'] - $a['depth'];
            });
        }

        function test($data, &$reply) {
            $retriever = new JsonSchema\Uri\UriRetriever;
            $refResolver = new JsonSchema\RefResolver($retriever);
            $refResolver::$maxDepth = 9999;
            $validator = new JsonSchema\Validator();
            $valid  = true;
            foreach ($data as $item) {
                $path = get_asset_path($item['obj']->name, 'schemas');
                $schema = $retriever->retrieve('file://' . realpath($path));
                $refResolver->resolve($schema);

                //Validate
                $validator->check($item['obj'], $schema);

                if (!$validator->isValid()) {
                    $valid = false;
                    foreach ($validator->getErrors() as $error) {
                        $path = $item['path'];
                        $name = $item['obj']->name;
                        $property = $error['property'];
                        $message = $error['message'];
                        $reply .= sprintf("Error at %s: <br> %s [%s] %s\n <br><br>", $path, $name, $property, $message);
                    }
                    break;
                }
            }
        }
        $to_test = array();
        $reply = "";
        $retriever = new JsonSchema\Uri\UriRetriever;
        $refResolver = new JsonSchema\RefResolver($retriever);
        $refResolver::$maxDepth = 9999;
        $validator = new JsonSchema\Validator();

        $data = (object) json_decode($request->getContent());


        $path = get_asset_path($data->name, 'schemas');

        $schema = $retriever->retrieve('file://' . realpath($path));

        $refResolver->resolve($schema);

        //Validate
        $validator->check($data, $schema);

        if ($validator->isValid()) {
            $reply =  "The supplied JSON validates against the schema.\n";
        } else {
            $to_test[] = array("depth" => 0, "obj" => $data, "path" => "root");
            traverse($data, $to_test);
            test($to_test, $reply);
        }

        return $reply;

    }

});





$app->match('/{page}', function ($page) {
    trigger_error($page . " is not a valid URL. Current options are: <br>
        /render <br>
        /validate <br>
        /schema/{schema name} <br>
        /template/{template name} <br><br>

        ");
    exit;

})->assert('page', '.+');

//////////////////////////










$app->error(function (\Exception $e, $code) use ($app) {
    $app['monolog']->addError($e->getMessage());
    $app['monolog']->addError($e->getTraceAsString());
    return new JsonResponse(array("statusCode" => $code, "message" => $e->getMessage(), "stacktrace" => $e->getTraceAsString()));
});

return $app;




?>
