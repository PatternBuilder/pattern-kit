## Store menu pattern
The Store menu pattern builds the navigational menu for Webstore.


### Example usage
```
{% include 'store_menu.twig' with {
    "name": "store_menu",
    "logo": {
        "link": {
            "href": "//www.redhat.com",
            "title": "Redhat.com"
        }
    }
    "utility_links": [{
        "href": "#",
        "text": "Redhat.com"
    },{
        "href": "#",
        "text": "FAQ"
    }],
    "nav_links": [{
        "href": "#",
        "text": "Linux Platforms"
    },{
        "href": "#",
        "text": "JBoss Middleware"
    }]
} only %}
```
