## Band Layout

### Example Usage

```
{% embed 'band.twig' with {
    "global": _context,
    "name": "band",
    "meta": meta,
    "config": {
        "collapse": "",
        "vertical_spacing": "stacked"
    },
    "background": {
        "color": "",
        "image_large": {
            "src": ""
        },
        "image_small": {
            "src": ""
        },
        "isFixed": false
    },
    "header": {
        "layout": "",
        "theme": "light"
    },
    "body": {
        "layout": "",
        "theme": "light"
    },
    "footer": {
        "layout": "",
        "theme": "light"
    }
} only %}

  {# HEADER #}
  {% block header %}

  {% endblock %}

  {# BODY #}
  {% block body %}

  {% endblock %}

  {# FOOTER #}
  {% block footer %}

  {% endblock %}

{% endembed %}

```
