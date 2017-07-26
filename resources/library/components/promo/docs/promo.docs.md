## Promo component
Allows a promo banner to be embedded on a page.

### Example Usage

```
{% include 'promo.twig' with {
    "headline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "text": "Aut, distinctio esse voluptates? Nobis molestiae...",
    "cta": {
        "href": "http://redhat.com",
        "text": "Learn More",
        "title": "Click me!"
    }
} only %}
```
