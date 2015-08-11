# neochic-tooltip
Simple tooltip plugin for jQuery
## Usage
**HTML**
```html
<div data-neochic-tooltip="Hello">Hover me</div>
```
**Javascript**
```javascript
$.neochicTooltip();
```
**Styling**  
The plugin doesn't provide any styling for your tooltips. Be sure that your tooltip element has at least absolute positioning.
```CSS
.neochic-tooltip {
  position:absolute;
}
```
## Settings
The plugin accepts an object with settings as parameter.
* class - Class attribute for tooltip element *(default neochic-tooltip)*
* id - Id attribute for tooltip element *(optional, default null)*
* attribute - data attribute to use for tooltip content *(default neochic-tooltip)*
* delay - Time in milliseconds until the tooltip appears *(default 500)*
* horizontalMargin - Minimum space kept to the right *(default 10)*
* verticalMargin - Minimum space kept to the bottom *(default 10)*

## Destroy
Call the plugin with "destroy" parameter removes the plugins functionality completely.
```javascript
$.neochicTooltip("destroy");
```