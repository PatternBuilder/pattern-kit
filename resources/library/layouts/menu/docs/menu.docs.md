# Menu layout

About the Menu layout...

## Options

In this layout, the configuration theme is set based on the hero image. If the hero image is dark, set the menu theme to dark so that the navigation in the transparent section of the menu can be read.

## Example usage

```
{% embed 'menu.twig' with {
    "name": "menu",
    "config": {
        "theme": "light"
    },
    "logo": {
        "image": {
            "name": "Shadowman",
            "alt": "Red Hat's company logo; Shadowman"
        },
        "link": {
            "href": "//www.redhat.com",
            "title": "Red Hat"
        }
    },
    "plugins": {
        "search": true,
        "store": false
    },
    "utility_links": [{
        "link": {
            "text": "Redhat.com",
            "href": "#",
            "title": "Descriptive text"
        }
    },{
        "link": {
            "text": "Sales",
            "href": "#",
            "title": "Descriptive text"
        }
    },{
        "link": {
            "text": "FAQ",
            "href": "#",
            "title": "Descriptive text"
        }
    }],
    "nav_links": [{
        "link": {
            "text": "Linux Platforms",
            "href": "#",
            "title": "Descriptive text"
        }
    },{
        "link": {
            "text": "JBoss Middleware",
            "href": "#",
            "title": "Descriptive text"
        }
    },{
        "link": {
            "text": "Training",
            "href": "#",
            "title": "Descriptive text"
        }
    }]
} only %}
{% endembed %}
```
