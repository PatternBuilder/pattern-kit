## Fieldset layout
The fieldset layout is typically used inside of the form layout and has similar styles to a group layout.  This adds semantic markup to a form field for optimal screen-reader experience.

### Options


### Example usage
```
{% embed 'fieldset.twig' with {
    "global": _context,
    "name": "fieldset",
    "config": {
        "vertical_layout": "min-stacked"
    },
    "header": {
        "layout": "",
        "theme": "light",
        "content": [{
            "name": "form_header",
            "headline": "Sockets",
            "style": "Title",
            "summary": "<p>Choose the amount of sockets you need. If you need more than 6 sockets, please <a href=\"#\">contact sales here</a>.</p>",
            "tooltip": {
                "theme": "dark",
                "type": "help",
                "text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>"
            }
        }]
    },
    "body": {
        "layout": "stacked",
        "theme": "light",
        "legend": "Sockets",
        "content": [{
            "name": "option_set",
            "type": "Single select",
            "input_item": [{
                "label": "2",
                "selected": true,
                "id": "socket2"
            },{
                "label": "4",
                "id": "socket4"
            },{
                "label": "6",
                "disabled": "Yes",
                "id": "socket6"
            }]
        }]
    },
    "footer": {
        "layout": "",
        "theme": "",
        "content": [{}]
    }
} only %}
{% endembed %}
```
