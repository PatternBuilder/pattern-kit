## Option set component
This component creates an option-set for a form which can be either single or multi-select.

### Example Usage

```
{% include 'option_set.twig' with {
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
} only %}
```
