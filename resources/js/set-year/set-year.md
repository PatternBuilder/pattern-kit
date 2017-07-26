## Set year

The set year function updates the string inside any element containing "data-rh-year", to reflect the desired year.

Only `data-rh-year="now"` is currently supported.  It will update the text inside the element to the current year; i
.e., 2016.

```html
<p>Copyright &copy;<span data-rh-year="now">2014</span> Red Hat Inc.</p>
```

The text inside the span tag would be replaced with 2016 if the current year was 2016.
