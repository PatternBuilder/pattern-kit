## Form header component

### Example Usage

```
{% include 'form_header.twig' with {
    "name": "form_header",
    "headline": "Sockets",
    "style": "Title",
    "summary": "<p>Choose the amount of sockets you need. If you need more than 6 sockets, please <a href="#">contact sales here</a>.</p>",
    "tooltip": {
        "theme": "dark",
        "text": "<p>Varias mentitum appellat eu quo malis excepteur senserit. Nam nescius praetermissum. Cillum de iis ipsum iudicem o non duis non duis, sed multos.</p>"
    }
} only %}
```
