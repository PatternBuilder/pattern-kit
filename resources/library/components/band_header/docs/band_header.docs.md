## Band header component

This component is used to add a standard title, headline, and summary element.

### Example Usage
```
{% include 'band_header.twig' with {
    "config": {
        "size": "band",
        "align": "left",
        "seo": {
            "position": "secondary",
            "priority": "standard"
        }
    },
    "title": "Infrastructure",
    "headline": "Every architecture needs a secure, reliable foundation",
    "hash_link": "infrastructure",
    "summary": "Secure your enterprise, deliver more with fewer resources, and use your big data to your advantage. <a href=\"#\">Click Here</a>"
} only %}
```
