---
title: What is WebRH
---

Creating a new component, layout or pattern (an artifact) is a powerful thing. Components and layouts are highly reusable, and often play many roles for many different patterns. In order to create the most enduring, stable and performant artifacts you will be required to create several files per component/layout/pattern.

### Artifact Files

1. JSON Schema
  - The schema describes the data needs of the template and defines the API into your artifact template.
  - This API is used in Pattern Kit to create an interactive data editor which can be used by the developer, manager or QA engineer to test the limits of the artifact.
  - This is the recommended [schema documentation](https://spacetelescope.github.io/understanding-json-schema/).
2. Twig Template
  - This template not only describes the markup used in the styleguide, but is also the exact file that will be used in production.
  - These files are used in patterns to embed and include layout and component templates. Layout/components are full of the rendered markup and occasionally include atom templates.
3. Docs
  - The associated doc file is displayed as the first tab of any pattern/component/layout.
  - This is a great place to explain the possible uses and describe how to use the component/layout in a pattern.
4. Doc Data
  - This is the default data used to render the template on first page load.
  - This data should demonstrate a practical use of the template with real content when possible.
  - This can be written as either YAML or JSON but YAML is preferred.
5. Sass file (component/layout only)
  - This file describes all of the styles associated with the template.
  - If the artifact is complex you might consider splitting this into multiple files. Sass compiling will glob all of them together
6. Test File
  - This is a set of [Mocha](https://mochajs.org/) tests written using [WebdriverIO](http://webdriver.io/), [WebdriverCSS](https://github.com/webdriverio/webdrivercss) and [Chai](http://chaijs.com/) that will be run to test the functionality and appearance of the element on every merge request.
7. Test Data
  - This is the data that will be used to render the template before the tests are run.
  - Separate Doc and Tests data ensures that our examples can be updated and improved without breaking out tests.
  - It can be a single object or an array of objects. See [Tests and QA](tests_and_qa) for more information.

### Creating your first artifact

Creating new artifacts is a core experience within WebRH. We strived to make it an easy and semi automated process. Every artifact starts by scaffolding out a set of templates.

`$ npm run create`

This command uses [Yeoman](http://yeoman.io/) to create a set of folders and files specific to your artifact's name and contents. Here is what it'll look like:

```
$ npm run create

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |   Welcome to the Webrh   |
   `---------´   |        generator!        |
    ( _´U`_ )    '--------------------------'
    /___A___\
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What would you like to create? (Use arrow keys)
❯ component
  layout
  pattern
  sub_pattern
```

Here you'll need to choose the type of artifact you're building. It's best to be sure about this choice from the start as your decision will affect the location of these files as well as the content.

#### Picking a name

After making a selection you'll be asked for an artifact name:

```
? What would you like to create? component
? What will this be called (i.e. 'Awesome Video') Icon Panel
```
This should be the human readable name. Yeoman will create a machine readable name by dropped the caps and replacing spaces with _ or - (depending on need).

#### Templated elements

Now that you've picked a name, you have the option of incorporating a set of templated elements in your schema.

```
? What would you like to create? component
? What will this be called (i.e. 'Awesome Video') Icon Panel
? Would you like to include any of the templated elements below? (Press <space> to select)
❯◯ config
 ◯ title
 ◯ headline
 ◯ summary
```

This step is optional.

#### Templated configurations

If you chose the templated config element, you will be asked what the configuration should include.

```
? What would you like to create? component
? What will this be called (i.e. 'Awesome video') Foo bar
? Would you like to include any of the templated elements below? config, title, headline
? Would you like to include any of the templated config options below?
 ◉ align
❯◉ size
```

This step is optional.

#### Incorporating custom elements

After selecting your templated elements, you can also choose to incorporate custom elements.

```
? What would you like to create? component
? What will this be called (i.e. 'Awesome video') Foo bar
? Would you like to include any of the templated elements below? config, title, headline
? Would you like to include any of the templated config options below? align, size
? Would you like to include any custom elements? (i.e. 'my-el, my-other-el') foo-bar
```

This step is optional but if you do enter in custom element names, you will be prompted to select a type for that element:

```
? What would you like to create? component
? What will this be called (i.e. 'Awesome video') Foo bar
? Would you like to include any of the templated elements below? config, title, headline
? Would you like to include any of the templated config options below? align, size
? Would you like to include any custom elements? (i.e. 'my-el, my-other-el') foo-bar
? Select a data type for foo-bar: (Use arrow keys)
❯ string
  number
  boolean
  object
  array
  ```

#### The files

After making your selections, you will be given a set of files to get you started:

```
   create src/library/components/icon_panel/api/icon_panel.json
   create src/library/components/icon_panel/api/icon_panel.twig
   create src/library/components/icon_panel/docs/icon_panel.docs.yaml
   create src/library/components/icon_panel/docs/icon_panel.docs.md
   create src/library/components/icon_panel/styles/_icon_panel.scss
   create src/library/components/icon_panel/tests/icon_panel.tests.js
   create src/library/components/icon_panel/tests/icon_panel.tests.json
```

Generating an Icon panel component produced these 7 files inside of `src/library/components/icon_panel`. Choosing a different category, such as layout, would place these files in a different location. You can see how the name "Icon panel" was changed to `icon_panel` for folder names and root name of each of the files.

These naming conventions are important so don't change the template to `icon_panel.twig` without updating all the files.

### Choose your own artifact adventure

Each category of artifact plays a bit of a different role and has different file requirements. So before you start building, check out the guide specific to each category below.

- [Components](creating_components)
- [Layouts](creating_layouts)
- [Patterns and Sub-patterns](creating_patterns)
