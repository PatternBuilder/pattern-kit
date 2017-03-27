## Universal footer sub_pattern
This subpattern is the universal footnote approved by the UX Working group.  It gives you the Red Hat logo, copyright statement, options for up to 5 legal links, and the ability to feature up to 3 events.

### Example Usage

```
{% include 'footer_mini.twig' with {
    "legal": [
        {
            "link": {
                "text": "Privacy statement",
                "href": "#",
                "title": ""
            }
        },
        {
            "link": {
                "text": "Terms of use",
                "href": "#",
                "title": ""
            }
        },
        {
            "link": {
                "text": "All policies and guidelines",
                "href": "#",
                "title": ""
            }
        }
    ],
    "features": [
        {
            "image": {
                "src": "/fixtures/images/logo-summit.png"
            },
            "link": {
                "href": "#"
            }
        }
    ]
} only %}
```
