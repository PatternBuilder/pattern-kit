---
title: Creating Patterns
---

A pattern in WebRH is the Model and [Presenter](model_view_presenter) of our MVP system. It describes the data needs (Model) for specific instance of our design. Two different bands might be rendered with the same combination of twig templates, but a pattern captures the specific data needs for each band.

The pattern then specifies the [Presenter](model_view_presenter) used to render those bands. A [Presenter](model_view_presenter) is a twig template that takes the Model data and passes it (and other data) to our layout and component templates.

There are 3 different levels of patterns:

- __Regular Patterns:__ These represent band sized views
- __Sub Patterns:__ Sub Patterns are typically a combination of a [sub layout](creating_layouts) and a enclosed components. They are meant to represent reusable display to be used inside of a regular pattern like [Custom Band](/schema/custom_band)
- __Pattern Groups:__ Pattern groups are similar to Grouping Layouts in that they describe the data structure and presenter of multi band displays like the [Hero](/schema/hero) or [Promo Placement](/schema/promo_placement).

## Scaffolding

Here's a list of the files you'll get when you create a pattern and what to do with them:

- pattern_name.twig
  - This twig template is considered the "Presenter" of our MVP. The purpose of the presenter is to be an intermediary between the model and the view. The presenter does the following:
    - Translate: Taking a value from the model (like `header.title`) and assigning it to its place within the view (like `band.header.content[0].title)
    - Embellish: The model will rarely provide all of the data required by the view. The presenter will usually be _embellishing_ the model with layouts, themes, template names, and other view specific information that you want to abstract away from the model.
    - Allocate: Most layouts have multiple block regions and the presenter will determine what templates/values get placed into each block. The model should never have knowledge of the view structure, so it'll be up to you to allocate these values to the correct areas of the template.
- pattern_name.json
  - This file contains the pattern schema. It uses [JSON Schema](http://json-schema.org/) to describe the data needed by the template.
  - The pattern schema should be written for the user first, not the view. Organize the data in a way that makes sense for the admin editor as you'll be able to use the Presenter to prepare the data for the view.
  - Don't reference any layout/component schema directly from the pattern (though atoms are ok). If you end up copying a component schema word for word, that's fine. They will probably diverge eventually.
- pattern_name.docs.json
  - This file is the JSON data used to populate the pattern inside of pattern kit. It allows you to provide default data anytime the pattern is viewed
  - This data can be referenced in other data files by using `@pattern_name` (which is very useful for a pattern references sub patterns or pattern group pulling in several patterns).
- pattern_name.docs.md
  - This markdown file will be rendered in the docs tab in pattern kit
  - Use this space to leave any pertinent notes about the pattern
- pattern_name.tests.js
  - Yeoman will build this with 1 basic full width test. If you need more, add them here.
- pattern_name.tests.json
  - This data will be used when running regression tests
  - You can create an array of objects if you need to test multiple data sets
