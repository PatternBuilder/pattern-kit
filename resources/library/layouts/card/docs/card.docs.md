## Card Layout

### Example Usage

```
{% embed 'card.twig' with {
    "global": _context,
    "name": "band",
    "meta": meta,
    "config": {
        "justify": "top",
        "theme": "dark",
        "eqpts": "small: 400, medium: 600, large: 900",
        "alt_theme": {
            "theme": "light",
            "background": "gray",
            "trigger": "hover"
        }
    },
    "background": {
        "color": "black",
        "image_large": {
            "src": "/fixtures/images/bg1.jpg"
        }
    },
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
