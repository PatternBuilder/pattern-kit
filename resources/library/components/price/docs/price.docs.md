## Price component
Add a price to a pattern. Automatically formats the price based on currency choice with commas.  All prices are
stripped of decimals.

 Optional teaser text or SKU data.

### Example Usage

```
{% include 'price.twig' with {
    "align": "center",
    "teaser": "Starting at",
    "sku": "RH0009",
    "amount": 2499,
    "currency": "USD"
} only %}
```
