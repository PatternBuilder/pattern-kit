## Navigation link component
The Navigation link component renders a link in either the Utility bar style or the Main Menu style.

**Note that the font color of the Menu style turns white in the mobile view due to the dark background so it will not be visible when squished in pattern kit.**

### Options
There are 2 options available to style the navigational link:

- `data-rh-nav-type="utility"`: All-caps font that sits in the Utility bar
- `data-rh-nav-type="menu"`: Large format link that lives in the Main menu

### Example usage
```
{% include 'nav_links.twig' with {
    "name": "nav_links",
    "style":  "Utility",
    "links": {
        "icon": "web-icon-search",
        "link": {
            "text": "Search",
            "href": "#",
            "title": "Description"
        }
    }
} only %}
```
