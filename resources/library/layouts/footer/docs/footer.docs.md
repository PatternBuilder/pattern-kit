## Footer Layout

### Example Usage

```
{% embed 'footer.twig' with {
    "global": _context,
    "name": "footer",
    "config": {
        "collapse": "full",
        "background_color": "rich-black""
    },
    "main": {
        "layout": "",
        "theme": "light"
    },
    "aside": {
        "background_color": "red",
        "theme": "dark"
    }
} only %}

  {# MAIN #}
  {% block main %}

  {% endblock %}

  {# ASIDE #}
  {% block aside %}

  {% endblock %}

{% endembed %}

```
