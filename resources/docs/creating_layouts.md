---
title: Creating layouts
---

Layouts act as a container for other layouts and components. They provide max-widths, margins, padding, backgrounds and themes to the items placed inside of them. Containers never display text, inline images or any other UI.

There are 3 different levels of layouts:

- Band width: These layouts contain a single band worth of content. The "band" layout is the obvious main example of this, but carousel_slide is a band width layout as well. A band width layout will have a max widths that make it line up with other bands, and will contain smaller components and sub layouts.

- Sub layouts: Sub layouts don't have max-widths, and fit into whatever space you put them into. Groups and cards are the main example of these.

- Grouping layouts:  These are the layouts that hold band width layouts. They might combine stacked bands together with a single background (hero), or switch between bands based on some JS driven UI (carousel).

## When to create a layout

The current set of layouts in WebRH are pretty complete. So you won't be making too many layouts. The band layout currently lets you do many different layout combinations (2 up, 3 up, 4 up etc). If all you need to do is create a unique "5 5 2" layout that has special breakpoints you don't need a new layout container, you just need to create a new entry for data-rh-layout. But if you have special max-width needs, or odd background behavior, or need child divs other than header/body/footer, you might need to create a new layout.


## Scaffolding

Here's a list of the files you'll get when you create a layout and what to do with them:

- layout_name.twig
  - This is the twig template used to render the layout.
  - Most layouts will have a header, body, footer.
  - Templates should contain no displayed text. That's up to the components.
  - Wrap any optional values in conditional statement like `{% if my.param %} data-rh-param="{{my.param}}" {% endif %}` to avoid attributes being printed when content is missing
- layout_name.json
  - This file contains the layout schema. It uses [JSON Schema](http://json-schema.org/) to describe the data needed by the template.
  - For a good introduction to [JSON schemas view this guide](https://spacetelescope.github.io/understanding-json-schema/)
- layout_name.docs.json
  - This file is the JSON data used to populate the layout inside of pattern kit. It allows you to provide default data anytime the layout is viewed
  - This data can be referenced in other data files by using `@layout_name`
- layout_name.docs.md
  - This markdown file will be rendered in the docs tab in pattern kit
  - Use this space to leave any pertinent notes about the layout
  - Include a code block describing how you can include this layout in a twig template
- _layout-name.scss
  - These styles are the __only__ styles that get applied to this layout (data-rh-layout is the only exception).
  - Layout styles should only include background, floats, flexbox, margins, padding etc. No styles will directly affect anything inside of a child component (colors, text alignment, font size etc).

```
.layout-name {
  &--header {

  }
  &--body {

  }
  &--footer {

  }
}
```
- layout_name.tests.js
  - Yeoman will build this with 1 basic full width test. If you need more, add them here.
- layout_name.tests.json
  - This data will be used when running regression tests
  - You can create an array of objects if you need to test multiple data sets
