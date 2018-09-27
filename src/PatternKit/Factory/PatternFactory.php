<?php
/**
 * @file
 * cp-patterns
 *
 * - Created by jassmith on 8/8/17
 */

namespace PatternKit\Factory;

use PatternKit\Model\PatternModel;

class PatternFactory
{
    protected $patterns;

    /**
     * Constructor.
     */
    protected function __construct()
    {
        // Initialize empty array.
        $this->patterns = array();
    }


    /**
     * Get an instance of the PatternFactory.
     *
     * @return PatternModel
     */
    public static function getPattern($pattern)
    {
        static $instance;
        if ($instance === null) {
            $instance = new static();
        }

        $patternObj = $instance->getPatternObj($pattern);

        return $patternObj;
    }

    /**
     * Load a pattern object, using caching if appropriate.
     *
     * @param string $pattern
     *   The pattern of interest.
     *
     * @return PatternModel
     */
    public function getPatternObj($pattern)
    {
        // If we've already got it, return it.
        if (!empty($this->patterns[$pattern])) {
            return $this->patterns[$pattern];
        }

        // Do the work to generate this pattern.
        $this->patterns['pattern'] = new PatternModel($pattern);

        return $this->patterns['pattern'];
    }
}
