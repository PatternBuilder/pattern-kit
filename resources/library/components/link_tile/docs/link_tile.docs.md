##Link tile component
The link-tile can have an [icon](../docs/getting_started_-_icon_font.html#a02), title, headline or summary that is wrapped in a link. The `<a>` element can have a `[title]` attribute.
The link-tile component can be used on its own or inside of a [Card Layout](layout_-_cards.html).

###Options
The link-tile component has 3 content alignment options.

- `data-rh-align="left"` : aligned left
- `data-rh-align="center"` : aligned center
- `data-rh-align="right"` : aligned right

The link-tile component has one height option that centers content vertically and horizontally in a min-height of 100px.

- `[data-rh-tileHeight="tall"]`

When the element size is less then 200px wide an ellipsis can occur on the link-tile-title.

- `[data-eq-pts="small:0, medium:200"]`

```container_example
{% include "link_tile.twig"%}
```
