# Patternkit REST API

```
/api/patterns
```

Simple GET request will return a full list of patterns. 

example subset of return below:
```
{
    "band": {
        "category": "layout",
        "title": "Band",
        "version": "1.0"
    },
    "band_group": {
        "category": "layout",
        "title": "Band Group",
        "version": "1.0"
    },
    ...
}
```

```
/api/render/*
```
All queries under this path can accept GET or POST, and may optionally specify a pattern at the end of the url to use default values for all parameters.

When using GET, you can use either of the following parameters to specify values
  * jsondata - a urlified json object
  * data - A base64 encoded, gzdeflated json object.
  
When using POST, you must use JSON.

The JSON object will resemble the following, and only the name property is required.

```
{
  "name": "link",
  "asset_host_prefix": "Something something, rabbits.",
  "arbitrary_property1": "It's a sailboat!",
  "arbitrary_property2": "The missing link was an href all along",
  "arbitrary_property3": 34982347918271923
}
```

* name - the machine name of the pattern as returned from /api/patterns
* asset_host_prefix - A prefix to add to all asset urls should you want them to be served from a different host. (they are normally served from patternkit otherwise) You may provide an empty string.
 

```
/api/render/json
```
Uses jsonrender.twig (to render the body property)

Note that this endpoint provides a wealth of metadata about the pattern.

```
/api/render/page
```
Uses basic.twig
  
```
/api/render/html
```

Uses basic-html.twig

```
/api/render/webcomponent
```

Uses webcomponent.twig