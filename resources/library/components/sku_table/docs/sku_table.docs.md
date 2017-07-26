## SKU table component
The SKU table appears on Webstore content type, typically on product detail pages.

### Options
- `jquery_inject`: When this option is set to true, it wraps the template in a script tag so that jQuery can iterate over them and inject values into the variables.  When using this, you must pass in the name of the variables to the appropriate fields using only 1 object in the row array, i.e.,
    ```
        "name": "sku_table",
        "jquery_inject": true,
        "rows": [{
            "sku": "{{:sku}}",
            "description": "{{:description}}",
            "quantity": "{{:quantity}}",
            "price": "{{:price}}",
            "line_total": "{{:lineTotal}}"
        }],
        "subtotal": "{{:subtotal}}"
    ```
  - When this option is set to false, data should be fed in manually.  i.e.,
      ```
          "name": "sku_table",
          "jquery_inject": false,
          "rows": [{
              "sku": "RH0009",
              "description": "Name of a product",
              "quantity": "2",
              "price": "500",
              "line_total": "1000"
          }],
          "subtotal": "1000"
      ```

### Example usage
```
{% include 'sku_table.twig' with {
    "name": "sku_table",
    "jquery_inject": false,
    "rows": [{
        "sku": "RH0009",
        "description": "Name of a product",
        "quantity": "2",
        "price": "500",
        "line_total": "1000"
    },{
        "sku": "RH0025",
        "description": "Name of another product",
        "quantity": "1",
        "price": "600",
        "line_total": "600"
    }],
    "subtotal": "1600"
} only %}
```
