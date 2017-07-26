## Image Component

### Example Usage

```
    {% include 'image_embed.twig' with {
        "config": {
            "align": "bleed",
            "hover_effect": "color-bw"
        },
        "background": {
            "color": "black",
            "type": "image_border"
        },
        "image": {
            "src": "http://www.redhat.com/en/cms/public/forrester-may2015_560x379.gif",
            "alt": "Image Alt Text"
        },
        "caption": "View the infographic",
        "link": {
            "href": "http://redhat.com",
            "title": "abc"
        }
    } only %}
```
