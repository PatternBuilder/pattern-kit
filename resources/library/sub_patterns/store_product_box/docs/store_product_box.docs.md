## Product card for store
Features card header and either a pricing set or a cta.  Supports product line themes.

### Example Usage

```
{% include 'store_product_box.twig' with {
    "themes": {
        "product_line": "Linux platforms"
    },
    "background": {
        "color": "white",
        "image": "No"
    },
    "header": {
        "title": "Server",
        "summary": "Whether rolling out new applications, virtualizing environments, or creating a secure hybrid cloud, Red Hat Enterprise Linux helps IT leaders scale their business and say yes to what's most important."
    },
    "body": {
        "config": {
            "align": "center",
            "theme": "light"
        },
        "price_data": {
            "teaser": "Starting at",
            "amount": "2499",
            "currency": "USD"
        },
        "cta": {
            "link": {
                "href": "#"
            }
        }
    }
} only %}
```
