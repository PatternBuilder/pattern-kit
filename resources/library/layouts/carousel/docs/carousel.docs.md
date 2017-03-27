## Carousel layout
Carousel is a layout that provides the necessary JS and navigational elements for a [Slick.js](http://kenwheeler.github.io/slick/) carousel.

It can have a background/color if necessary, or that can be left up to the individual body items.

```
{% embed 'carousel.twig' with {
    "global": _context
    "config": {
        "slick_config": {},
        "theme": "light"
    },
    "background": {
        "color": "white",
        "image_large": {
            "src": "foo.jpg"
        },
        "image_small": {
            "src": "foo.jpg"
        }
    }
} only %}

    {% block body %}

    {% endblock %}

{% endembed %}
```
