---
hologram: true
title: Toggle Element
category: JavaScript - Theme
name: 04-optinfunction
---

Toggle element provides a method for sliding open a card or other element using an attribute (data-rh-roggle-target) to identify the slide event and which element to slide.

This event actually changes the value of data-rh-state, so that any element can add the extend to activate this effect.

```inline
  <header class="rh-option-set-header" data-rh-tooltip-type="help" data-rh-toggle-open="click">
      <h3 class="rh-option-set-title">Sockets</h3>
  </header>
  <div class="rh-option-set-tooltip" data-rh-toggle-target data-rh-theme="dark">
      <span class="rh-option-set-tooltip-arrow" data-rh-toggle-pointer></span>
      <span class="rh-option-set-tooltip-content">
        <p>Lorem ipsum</p>
      </span>
  </div>
```

