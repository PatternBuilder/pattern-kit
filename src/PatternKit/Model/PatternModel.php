<?php
/**
 * @file PatternModel.php
 */

namespace PatternKit\Model;

use Silex\Application;
use Silex\ControllerProviderInterface;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class PatternModel
 *
 * @package PatternKit
 */
class PatternModel
{

    /**
     * The defaults for this pattern.
     *
     * @var $seed_data
     */
    public $seed_data;
    public $asset_data;
    public $docs_data;
    public $raw_schema;
    public $schema;
    public $pattern;
    public $template;


    /**
     * Constructor.
     *
     * @param string $pattern
     *   Pattern of interest.
     */
    public function __construct($pattern)
    {
        $this->pattern = $pattern;
    }

    /**
     * Load the seed data for a specific pattern.
     *
     * @return array|mixed
     */
    public function getSeedData()
    {
        if (!empty($this->seed_data)) {
            return $this->seed_data;
        }

        $seed_path = get_asset_path($this->pattern, 'data');

        if ($seed_path) {
            $seed_file = file_get_contents(
              'file://'.realpath($seed_path)
            );
            if (($pathinfo = pathinfo(
                $seed_path
              )) && isset($pathinfo['extension']) && $pathinfo['extension'] == 'yaml') {
                $this->seed_data = Yaml::parse($seed_file);
            } elseif (!empty($seed_file)) {
                $this->seed_data = json_decode($seed_file, true);
            } else {
                $this->seed_data = array();
            }
            data_replace($this->seed_data);
        } else {
            $this->seed_data = array();
        }

        return $this->seed_data;
    }

    /**
     * Load the docs data for a specific pattern.
     *
     * @return \Mni\FrontYAML\Document
     */
    public function getDocsData()
    {
        if (!empty($this->docs_data)) {
            return $this->docs_data;
        }

        $docs_path = get_asset_path($this->pattern, 'docs');

        $docs_file = file_get_contents('file://'.realpath($docs_path));
        $parser    = new \Mni\FrontYAML\Parser;
        $this->docs_data = $parser->parse($docs_file);

        return $this->docs_data;
    }

    /**
     * Load the docs assets for a specific pattern.
     *
     * @return array
     */
    public function getAssetData()
    {
        if (!empty($this->asset_data)) {
            return $this->asset_data;
        }

        $asset_path = get_asset_path($this->pattern, 'assets');
        $asset_file = file_get_contents('file://'.realpath($asset_path));

        $this->asset_data = YAML::parse($asset_file, false);

        return $this->asset_data;
    }

    /**
     * Load schema for a specific pattern.
     */
    public function getSchema()
    {
        if (!empty($this->schema)) {
            return $this->schema;
        }

        // Define data necessary to fetch the schema.
        $retriever = new \JsonSchema\Uri\UriRetriever;
        $path      = get_asset_path($this->pattern, 'schemas');

        // Load the schema file.
        $this->schema = $retriever->retrieve('file://'.realpath($path));

        // Resolve any nested schemas that need to be loaded.
        $refResolver            = new \JsonSchema\RefResolver($retriever);
        $refResolver::$maxDepth = 9999;
        $refResolver->resolve($this->schema);

        return $this->schema;
    }

    /**
     * Load the raw schema for a specific pattern.
     *
     * @return mixed
     */
    public function getRawSchema()
    {
        if (!empty($this->raw_schema)) {
            return $this->raw_schema;
        }

        $path      = get_asset_path($this->pattern, 'schemas');
        $this->raw_schema = json_decode(file_get_contents($path), true);

        return $this->raw_schema;
    }

    /**
     * Load template for a specific pattern.
     */
    public function getTemplate()
    {
        if (!empty($this->template)) {
            return $this->template;
        }

        $template_path = get_asset_path($this->pattern, 'templates');

        if ($template_path) {
            $this->template = file_get_contents(
              'file://'.realpath($template_path)
            );
        }

        return $this->template;
    }
}
