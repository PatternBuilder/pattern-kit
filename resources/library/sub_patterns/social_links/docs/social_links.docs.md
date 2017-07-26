## Social links subpattern
This subpattern displays a set of social media icons linked to accounts in a flex layout (space-between).

### Example Usage

```
{% include 'social_links.twig' with {
    "config": {
        "theme": "dark",
        "size": "small"
    },
    "links": [
        {
            "platform": "Facebook",
            "account": "Red Hat",
            "href": "http://www.facebook.com",
            "title": "Follow us on Facebook"
        },
        {
            "platform": "Twitter",
            "account": "&#64;RedHatJobs",
            "href": "http://www.twitter.com",
            "title": "Follow us on Twitter"
        },
        {
            "platform": "Google+",
            "account": "Red Hat Jobs",
            "href": "http://plus.google.com",
            "title": "Follow us on G+"
        },
        {
            "platform": "YouTube",
            "account": "Red Hat Channel",
            "href": "http://www.youtube.com",
            "title": "Follow our YouTube channel"
        }
    ]
} only %}
```
