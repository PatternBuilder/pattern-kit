---
title: Creating Components
---

A component is a "block" level template that contains website content. A component may be a single button or a collection of several text fields and images. It is important to make components as small as possible, though this does not mean that every component should be a single HTML element.

## When to create a component

When faced with a new design start trying to create it with current, off the shelf components. If you find that you are not able to complete your design without making a change to a current component step back and ask if this change could be used in other designs.

If updating an existing component could be reused for other designs and allows you to complete your design you might not need to make anything new! But if the design is unique to this piece of content, or the changes would be too far reaching, it might be time to create a new component.


## Scaffolding

Here's a list of the files you'll get when you create a component and what to do with them:

- component_name.twig
  - This is the twig template used to render the component.
  - Template should not contain any text that would need translation
  - Wrap any optional values in conditional statement like `{% if my.param %} <p> {{my.param}} </p> {% endif %}` to avoid tags/attributes being printed when content is missing
- component_name.json
  - This file contains the component schema. It uses [JSON Schema](http://json-schema.org/) to describe the data needed by the template.
  - For a good introduction to [JSON schemas view this guide](https://spacetelescope.github.io/understanding-json-schema/)
- component_name.docs.json
  - This file is the JSON data used to populate the component inside of pattern kit. It allows you to provide default data anytime the component is viewed
  - This data can be referenced in other data files by using `@component_name`
- component_name.docs.md
  - This markdown file will be rendered in the docs tab in pattern kit
  - Use this space to leave any pertinent notes about the component
  - Include a code block describing how you can include this component in a twig template
- _component-name.scss
  - These styles are the __only__ styles that get applied to this component.
  - Component styles should only include vertical rhythm and text/image styles.
  - Some components will have minor layout but no component should dictate its own widths, padding or margins.

```
.component-name {
  &--image {
    margin-bottom: 1em;
  }
  &--title {
    @extend %some-title-extend;
  }
  &--unique-text {
    color: color(black);
    font-size: pem(24);
    text-transform: uppercase;
    margin-bottom: 0;
  }
}
```
- component_name.tests.js
  - Yeoman will build this with 1 basic full component test. If you need more, add them here.
- component_name.tests.json
  - This data will be used when running regression tests
  - You can create an array of objects if you need to test multiple data sets

## Prototyping

After your files are scaffolded the first step will be to mock up the component in HTML and Sass. Few things to note in this process:

- Block level (`.component-name`) selector rarely has any styles associated with it
  - Backgrounds, padding, borders, margins are not allowed on components, and most element styles should be applied directly to the element selectors
- Element selectors (`&--image`) use the `&--` format to allow easy component wide changes to the selectors. It also provides a sense of nesting without making more complex selectors
- Always start by looking for an extend that accomplishes the text styles that you want. If one does not exist exactly as needed:
  - Ask why you need something only slightly different from an established style (maybe you should use that established one instead)
  - If it is truly different for a reason, and this isn't some wild, one off scenario, create the styles as an extend so that other components may use them
- Don't create styles based off a component's location (inside a band, or card, or other global class). Though components can opt into parent contexts like `data-rh-theme="dark"`.
- Don't use additional classes to create modifiers for your component. If you need a right aligned variation create a data attribute like `data-rh-align-"right"` and use that attribute to trigger the varied styles.


## Writing Schema

The component schema defines the data requirements for your template file. The schema will enumerate the various variables you can pass into a template, as well as list valid values, and define which variables are required. They are one of the most simple schemas you'll write. Components never contain other components, so the only other schema a component might reference is an Atom.

Sometimes it makes sense to write the schema first and then build your template around that data, but often you don't know exactly what data you need until you've fully prototyped the component.


## Creating a starting data set

Once you've finished writing a schema, go into Pattern Kit and fill it out with some dummy data to get started. This will generate a set of data in the JSON tab that you can copy over into the component_name.docs.json so that your component will have dummy data when it loads. You can then start replacing your static text with variables.


## Updating associated schemas

Components aren't very useful if they can't somehow be placed into a band. Determine how a component will be displayed (directly in the band body, inside a card, inside a group, inside some special new layout) and update the schemas of those layouts to include a reference to your new component. To do this, update the "oneOf" arrays of each layout region where your component could show up. For example, the card body content would include a "oneOf" starting with the following. Alpha order isn't technically required, but does keep things organized.

```
"oneOf": [
    {"$ref": "band_header.json"},
    {"$ref": "cta.json"},
    {"$ref": "component_name.json"},
    {"$ref": "customer_success.json"},
    ...
  ]

```

## Writing tests

After using yeoman to create a set of starter files, you'll already have your first test created!
