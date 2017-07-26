## Styled select component

This is a stand-alone instance of the Styled Select element. The select itself is created by [ChosenJS](http://harvesthq.github.io/chosen/). To use the select in another component simply add `[data-rh-chosen="single"]` to the select element. If there are fewer then 6 options the search input is hidden via [ChosenJS](http://harvesthq.github.io/chosen/) `disable_search_threshold` option.

If you are setting the value of the select via JS (on page load, based on a cookie etc), or updating the options of the select, be sure to fire off a `chosen:update;` to refresh the dropdown UI.

 `$('[data-rh-chosen="single"]').trigger("chosen:updated");`



```container_show
{% include "styled_select.twig" %}
```


