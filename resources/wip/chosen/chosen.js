/*doc
 ---
 title: Chosen
 category: JavaScript - Chosen
 name: 04-chosen
 ---

 Chosen is a jQuery plugin that makes long, unwieldy select boxes much more user-friendly.

 [Documentation, usage, and examples](http://harvesthq.github.io/chosen)

 */


$('[data-rh-chosen="single"]').chosen({disable_search_threshold: 6});

$('[data-rh-chosen="multi"]').chosen({width: "100%"});

