## Generic component

The Generic component can be used to display a default set of html tags. This is suitable for generic markup output 
or when programmatic output styles should not deviate from default site styles.

This component allows us to provide an "opt-in" class for our basic component styles, rather than applying them globally then having to constantly overwrite them when not needed.

The generic component has a single modifier which is `align` for setting left, right, center alignment.

```container_example
    {% include "generic.twig" %}
```
