## Pricing set subpattern

### Example Usage

```
{% include 'pricing_set.twig' with {
   "config": {
       "align": "center"
   },
   "price_data": {
       "teaser": "Starting at",
       "sku": "RH0009",
       "amount": "2499"
   },
   "cta": {
           "link": {
               "href": "#",
               "text": "Buy it"
           }
       }
   }
} only %}
```
