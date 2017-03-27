## Footnote component

The Footnote component can be used to display footnotes. Can be displayed with an asterisk, numbered or with no label.

```container_example
{% include "footnote.twig" with {
  "name": "footnote",
    "align": "left",
    "indicator": "numbered",
    "footnotes": [{
        "footnote": "Red Hat client data and Fortune Global 500 list, 2014 Red Hat client data and Fortune Global 500 list, 2014 Red Hat client data and Fortune Global 500 list, 2014 Red Hat client data and Fortune Global 500 list, 2014"
    }, {
        "footnote": "Red Hat client data and Fortune 500 list, 2014"
    }]
} only %}
```
