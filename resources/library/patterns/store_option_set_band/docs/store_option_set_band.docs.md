## Store option-set band pattern

This pattern can build a band with a set of options in a form with option header, submit button, and footnotes.

### Example Usage

```
{% include 'store_option_set_band.twig' with {
    "header": {
        "headline": "How would you like to configure Red Hat Enterprise Linux Server?",
        "summary": "Vidisse quem laboris, est fugiat nam dolor in cupidatat sed occaecat, ut tempor."
    },
    "body": {
        "content": [{
            "name": "quantity_group",
            "headline": "Quantity",
            "summary": "<p>Lorem description</p>",
            "tooltip_text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>"
        },{
            "name": "option_group",
            "headline": "Virtual hosts",
            "summary": "<p>Lorem description</p>",
            "tooltip_text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>",
            "option_items": {
                "type": "Single select",
                "input_item": [{
                    "label": "1 or 2",
                    "id": "host1"
                },{
                    "label": "Unlimited",
                    "id": "host2"
                }]
            }
        },{
            "name": "option_group",
            "headline": "Subscription length",
            "summary": "<p>Lorem description</p>",
            "tooltip_text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>",
            "option_items": {
                "type": "Single select",
                "input_item": [{
                    "label": "Standard subscription",
                    "id": "standard"
                },{
                    "label": "Premium subscription",
                    "id": "premium"
                },{
                    "label": "Self-support",
                    "id": "self"
                }]
            }
        },{
            "name": "option_group",
            "headline": "Add-on",
            "summary": "<p>Lorem description</p>",
            "tooltip_text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>",
            "option_items": {
                "type": "Multi-select",
                "input_item": [{
                    "label": "Smart Management",
                    "id": "smart"
                },{
                    "label": "High Availability",
                    "id": "high"
                },{
                    "label": "Resilient Storage",
                    "id": "resilient"
                }]
            }
        }]
    },
    "footer": [{
        "footnote": "This subscription is only available for a single socket-pair; it cannot be stacked or combined."
    }]
 } only %}
```
