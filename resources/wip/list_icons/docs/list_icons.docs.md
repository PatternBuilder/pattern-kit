## List icons

List icons is a method for displaying several icons with or without descriptive text. The icon can be a link, or a span as shown by the first two items in the example below.

Icons are specified using the class method, adding a class such as `rh-icon-office-reception` to the rh-list-icons-icon.

Icons are layed out 5 icons per row. Rows with less than 5 can have icons in one of 4 positions:

```inline
data-rh-align="left"
data-rh-align="right"
data-rh-align="center"
data-rh-align="full"
```

####List Icons has 3 different element query points:

1. __large__ - Full size icons/text, 5 icons per row
2. __medium__ - 80% sized icons/text, 5 icons per row
3. __small__ - 80% sized icons/text, 3 icons per row

```container_show
{% include "list_icons.twig" %}
```
