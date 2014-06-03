# Hjælp

## Why that name?

Hjælp (hjaelp) means Help in danish. This plugin is intended for adding small
help icons on your site, which will reveal a small descriptive pop-over on click.

## Examples

```html
<div class="help" data-title="Help" data-content="A helpful text" data-icon="?"></div>
```

```javascript
$('.help').hjaelp();
```

### Placement

You can chose to have the majority of the popover on the right side of the icon (default) - or on the left side of the icon. This can be done using the ``data-placement`` attribute on the element. The valid options are ``right`` (default) and ``left``.
