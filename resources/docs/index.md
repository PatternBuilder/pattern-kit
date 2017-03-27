---
title: Getting Started
---

WebRH is a design system built to power [redhat.com](http://redhat.com) and other Red Hat web properties.

## Installation

WebRH is separate from the main Drupal repo and has its own build system and distribution methods. Before you get started, be sure to install the following applications.


### Download and install dependencies

If you are not on a Mac, please ensure you have a [built-in PHP Server](http://php.net/manual/en/features.commandline.webserver.php).

1. ** WebRH Repo**
    - `$ git clone git@gitlab.it-mkt.corpdev.redhat.com:it-marketing/webrh.git && cd webrh`
        - Check out the repository and go into the webrh directory
2. **Composer**
    - Go to the [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) site and follow instructions for installing on your OS.
    - `$ composer install`
        - This will use composer to install [Pattern Kit](https://github.com/PatternBuilder/pattern-kit).
3. **Node Package Manager**
    - `$ npm -v`
        - This will test if node package manager is installed on your system already. If npm is not installed, visit [NodeJS](https://nodejs.org/en/download/) and follow instructions for your OS.
        - You need to have at least version 6+ installed.
    - `$ npm install`
        - Install all the defined packages for this repo.
4. **Bower**
    - `$ bower install`
            - Install all the library dependencies for this repo.
5. **Start WebRH**
    - `$ grunt watcher`
6. **Visual Regression Testing**
    - If you are going to be running visual regression tests, visit [GraphicsMagick](http://www.graphicsmagick.org/download.html) to install what you need.


## Getting around Pattern Kit

Your browser should open up to `http://localhost:5001/schema/page` where you can view and interact with WebRH Patterns.

The navigation at the top lets you browse our existing patterns, subpatterns, layouts, components, and atoms and preview what they look like.  You can put custom data into the pattern by selecting the `Schema Editor` tab either below the preview or to the right of the preview (depending on your screen size).

####Tips

- Use the "page" pattern to create a page with multiple patterns
- Click on the "schema editor" tab to modify content and settings
- Use the "create link to this data" at the bottom to share your page. You must click this button each time you make any content or setting changes that you want to save.


### WebRH Navigation

WebRH has 5 primary navigation categories:

1. **Patterns**
  - Patterns represent a single content/design pattern
  - Find any band on redhat.com and there is a pattern that describes the data model and visual display of that data
  - Though patterns describe the visual display, they do not dictate the markup/css for that display. That's up to the layouts and components that are called by the pattern.
  - The pattern acts as an intermediary, taking content from Drupal and rendering it through various templates in the design system.
2. **Sub Patterns**
  - Sub Patterns are identical to patterns in that they describe a content/design pattern, and that they call layouts/components to render their HTML
  - The difference is that Sub Patterns are not full bands of content, but individual blocks of content that can be used inside of other patterns.
  - This allows us to create much more flexible Patterns as they can include 1 or more of any combination of Sub Patterns.
3. **Layouts**
  - Layouts are a container template that allow us to group together various components in different grids, with different backgrounds, and different themes.
  - Layouts never contain any rendered text, or inline assets, they only have space to hold components which contain content. Layouts also never directly affect included components (other than via layout and opt in themes).
  - Layouts, like components are part of the Pattern Library, and should never be rendered directly from Drupal. Patterns should always stand between the Pattern Library and Drupal's data. This separation makes updating a template or variable name possible without possibly breaking Drupal.
4. **Components**
  - Components are the pieces of content that we place inside of our layouts. If text or an inline image needs to be displayed, that belongs inside of a component.
  - Components should never set a component wide background, or set margin/padding/border on the entire component. All of these things are meant to go in the layout they are placed in.
5. **Atoms**
  - Atoms are a special set of templates and schemas that describe small, reusable, unstyled pieces of markup or data patterns.  These do not render in the preview as there are not typically twig or styles associated with them.
  - Schema Atoms (like link, image, video) describe the data model Drupal uses for various data and can be called by reference in any schema to specify "use a standard Drupal image here".
  - Template Atoms (like summary_field) describe common rendering templates. These atoms are for inline rendering only (not block elements) as there are no styles associated with Template Atoms.
6. **Style Guide Docs**
- You are here already! This is the space for documentation not related to a specific pattern, layout or component.


## What to do next

- **New to WebRH?**  Check out the page [What is WebRH](what_is_webrh).
- **Are you an Automation or QA tester?**  Check out the page [Tests and QA](tests_and_qa).
- **Ready to push your code?**  Check out the page [Contributing to WebRH](contributing_to_webrh).
