## Store card listing pattern

Gallery of store product cards with optional footnote or CTA.

### Example Usage

```
{% include 'store_option_set_band.twig' with {
    "name": "store_listing",
    "config": {
        "background_color": "gray"
    },
    "body": {
        "layout": "gallery3",
        "sub_patterns": [
            {
                "name": "store_product_box",
                "themes": {
                    "product_line": "Linux platforms"
                },
                "header": {
                    "title": "Server",
                    "summary": "Whether<sup>&reg;</sup> rolling out new applications, virtualizing environments, or <a href='#'>creating a secure hybrid cloud</a>, Red Hat Enterprise Linux helps IT leaders scale their business and say yes to what's important."
                },
                "body": {
                    "content": [
                        {
                            "name": "pricing_set",
                            "config": {
                                "align": "center"
                            },
                            "price_data": {
                                "teaser": "Starting at",
                                "amount": 799
                            },
                            "cta": {
                                "type": "primary",
                                "href": "#",
                                "title": ""
                            }
                        }
                    ]
                }
            },
            {
                "name": "store_product_box",
                "themes": {
                    "product_line": "Linux platforms"
                },
                "header": {
                    "title": "Virtual datacenters",
                    "summary": "Whether rolling out new applications, virtualizing environments, or creating a secure hybrid cloud, Red Hat Enterprise Linux helps IT leaders scale their business and say yes to what's important."
                },
                "body": {
                    "content": [
                        {
                            "name": "pricing_set",
                            "config": {
                                "align": "center"
                            },
                            "price_data": {
                                "teaser": "Starting at",
                                "amount": 2499
                            },
                            "cta": {
                                "type": "primary",
                                "href": "#",
                                "title": ""
                            }
                        }
                    ]
                }
            },
            {
                "name": "store_product_box",
                "themes": {
                    "product_line": "Linux platforms"
                },
                "header": {
                    "title": "Desktop or Workstation",
                    "summary": "Whether rolling out new applications, virtualizing environments, or creating a secure hybrid cloud, Red Hat Enterprise Linux helps IT leaders scale their business and say yes to what's important."
                },
                "body": {
                    "content": [
                        {
                            "name": "pricing_set",
                            "config": {
                                "align": "center"
                            },
                            "price_data": {
                                "teaser": "Starting at",
                                "amount": 799
                            },
                            "cta": {
                                "type": "primary",
                                "href": "#",
                                "title": ""
                            }
                        }
                    ]
                }
            }
        ]
    },
    "footer": {
        "sub_patterns": [{
            "name": "footnote",
            "align": "left",
            "indicator": "asterisk",
            "footnotes": [{
                "footnote": "This subscription is only available for a single socket-pair; it cannot be stacked or combined."
            }]
        }]
    }
} only %}
```
