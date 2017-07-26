##Social icon component
The social icon component link-tile can have an [icon](../docs/getting_started_-_icon_font.html#a02), title, headline
 or summary 
that is wrapped in a link. The `<a>` element can have a `[title]` attribute.
The link-tile component can be used on its own or inside of a [Card Layout](layout_-_cards.html).

###Options
The social icon component has 3 content alignment options.

- `data-rh-align="left"` : aligned left
- `data-rh-align="center"` : aligned center
- `data-rh-align="right"` : aligned right

The social icon component has 3 size options.

- `data-rh-icon-size="small"` : icon and handle are small fonts
- `data-rh-icon-size="medium"` : icon and handle are medium fonts
- `data-rh-icon-size="large"` : icon and handle are large fonts

The social icon component has 2 positioning options.

- `data-rh-position="right"` : account name or handle appears to the right of the icon
- `data-rh-position="below"` : account name or handle appears below the icon

```container_example
{% include "social-icon.twig" with {
   "config": {
       "content_align": "center",
       "icon_size": "medium",
       "show_handle": true,
       "handle_position": "below"
   },
   "social": {
       "platform": "Reddit",
       "account": "Red Hat",
       "href": "http://www.facebook.com",
       "title": "Red Hat's Facebook page"
   }
} only %}
```
