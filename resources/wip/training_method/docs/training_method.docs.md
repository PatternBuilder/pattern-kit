##Training method

The Training Method component can be displayed with an inline video using a YouTube iFrame. If no video is provided then the methods of training, duration, cost, and the enroll button is the only data displaying.

- The primary cta is implemented with the label of "Enroll".
- The dropdown is created by ChosenJS used in the [styled-select component](component_-_styled_select.html) by adding `[data-rh-chosen="single"]` to the select element.
    - This implementation shows less then 6 select options, the search input filed is hidden via ChosenJS used in the [styled-select component](component_-_styled_select.html).



[Training Method Patterns](patterns_-_training.html)




```container_show
{% include "training_method.twig" %}
```

