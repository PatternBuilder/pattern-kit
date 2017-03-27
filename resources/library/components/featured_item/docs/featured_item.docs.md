##Featured item component

Featured Item component can be used on its own or inside of a [Card Layout](layout_-_cards.html) with `[data-rh-theme="light"]`. The card implimentation usually uses a [Band layout](layout_-_bands.html) with `[data-rh-band-background="gray"]` and the layout of `[4 4 4 flex]`.

[Featured Event Patterns](../patterns/band_patterns_-_featured_event.html)

If no logo is provided then `[data-rh-state="no aside"]` needs to be applied to  `rh-featured-item-content` to make the summary full width

###EQJS layouts
__small__ - Stacked Layout. Logo centered<br>
__medium__ - 2 column layout, logo floated right<br>
__large__ - 2 column layout, logo column reduces in % size


###Asset Notes
`.rh-feature-item-logo` width should be 600px wide (for retina displays)


```container_example
    {% include "featured_item.twig" %}

```
