## Call-to-action component

A call-to-action (CTA) is an emphasized link that often drives the user to a marketing goal or action item for that 
page or band.  Recommended usage:

- Only 1 primary CTA per band, limited number per page
- CTA secondaries for cards

### Example Usage

```
{% include 'cta.twig' with {
    "config": {
        "type": "primary",
        "align": "left"
        "semantic": "link"
    },
    "link": {
        "href": "#",
        "text": "this is my test"
        "title": "link title"
    }
} only %}
```
