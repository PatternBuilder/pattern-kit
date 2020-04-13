## 1.5 Additional config features
Tag: [1.5](https://github.com/PatternBuilder/pattern-kit/releases/tag/V1.5)

- Add support for body attributes in the config

## 1.4 Code refactor and changes to allow assets to track with the module.
Tag: [1.4](https://github.com/PatternBuilder/pattern-kit/releases/tag/V1.4)

Refactor of pattern kit, additions to component renderer
- Factored methods out of large controllers.
- Removed redundant code
- Added a pattern model class to abstract the patterns a bit.
- Modified the way webcomponent renderer works.
- Added style component server.
- Changed from lzstring to pako for more portability across platforms (lzstring sucks at reproducibility cross-platform)
- Add support for csscomponent, web component, page and html render endpoints
- Refactor the route controller to make it easier to read.

## 1.3 Documentation style updates
Tag: [1.3](https://github.com/PatternBuilder/pattern-kit/releases/tag/V1.3)

- Add font family, colors, spacing, etc. to styleguide. Cleaned up some extra scrollbars, set a max width on the content area of the docs area.

## 1.2 Minor style tweaks and functionality additions (2017-03-09)

Tag: [1.2](https://github.com/PatternBuilder/pattern-kit/releases/tag/V1.2)

- Change rendering of the styleguide documentation to lean on bootstrap column grid
- Add logic to render only the tabs that work for a particular atom based on what data is present
- Add alert messaging for atoms in the preview area to flag that it will not render
- Reduce and organize CSS with section comments for clarity
- Add color to the nesting of the schema editor
- Increase size of buttons for better accessibility for those of us with poor vision :D
- Add ability to designate order on documentation in the markdown and render the secondary nav in that order
- Update jQuery package to reference CDN for consistency


## 1.0 support-at-data-and-yaml (2016-08-01)

Tag: [1.0](https://github.com/PatternBuilder/pattern-kit/tree/V1.1)

Now supporting YAML files for docs using the same basename as JSON. Also supporting @data to reference other component's doc data file. So @component would import component.docs.json or component.docs.yaml into your data file.


## 1.0 Initial Release (2016-06-13)

Tag: [1.0](https://github.com/PatternBuilder/pattern-kit/tree/V1.0)
