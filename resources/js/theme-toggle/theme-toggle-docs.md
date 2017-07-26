---
hologram: true
title: Theme Toggle
category: JavaScript - Theme
name: 04-optinfunction
---

Theme Toggle provides a method for letting a card or other element using a theme to toggle its theme on a specific event.

This event actually changes the value of data-rh-theme, so backgrounds, and component styles can changed based on that.

```inline
  <div data-rh-theme="light gray" data-rh-theme-hover="dark"> // Hovering will change theme from light to dark. Mouseout will change back to light.

  <div data-rh-theme="light gray" data-rh-theme-click="dark"> // Clicking will change theme from gray to dark and back again
```

```style
// For demo purposes only
.rh-card--layout {
  color: #464646;
}
[data-rh-theme~="dark"].rh-card--layout {
  color: #fff;
}

```

```container_show
<div class="rh-card--layout" data-rh-theme="light gray" data-rh-theme-hover="dark">Hover Over Me</div>
```

```container_show
<div class="rh-card--layout" data-rh-theme="light gray" data-rh-theme-click="dark">Click Me</div>
```

