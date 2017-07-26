##Training row

A training-row component is a method for displaying a three column data set. The first row can have an icon column (typically 1 or 2 icons), a detail column with a title and descriptive text, and a contact info column with a call-to-action.

Icons are specified using the class method, adding a class such as `rh-icon-office-reception` before the `rh-training-row-icon` class. If more then one icon is needed then the icons are stacked.

```inline
<a class="rh-icon-office-reception rh-training-row-link" href="#">My CTA Text</a>
```

Training Rows are often placed into a [listing-table](layout_-_listing_table.html) layout with alternating themes.


## Featured Row
```container_show
{% include "training_row.twig" with rowRedHat %}
```
## Regular Row
```container_show
{% include "training_row.twig" with rowData %}
```
