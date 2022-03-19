# hover-over
 Visualise plugin to add smooth complex hover effect on you html's flag



You have to dowload the file called index.js in assets/js


HOW TO USE THIS PLUGIN

* Download the file called index.js in assets/js
* Put it in your HTML file
* Now target any HTML tag with those keywords `<div gradient-container color="white, black, white" amp=20>` 

`gradient-container` tells the plugin that this is the tag i want to be underlined.





* Now target your HTML tag with the keyword "gradient-container".
* Then add "color="X; X; X"" where X's are colors (rgba, hex, string, ...). It is possible to have 2 or 3 colors only.
* Finally choose the amplitude. It corresponds to the width in wich the gradient occurs





## Installation

Download the file called index.js in assets/js and put it in your HTML file.
_Get the [JS file](https://github.com/thomas-auffroy/hover-over/blob/main/assets/js/index.js)._

## Usage

#### HTML
```html
<div gradient-container color="white, black, white" amp=20></div>
```

| Parameters          | Type     | Default | Description                                                                    |
| ------------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| `gradient-container`|          |         | Container element.                                                             |
| `color`             | `string` |         | Accept 2 or 3 colors separated by `;`. Could be string, hex, hsln rgb, rgba... |
| `amp`               | `number` |         | How the transition is spread.                                                  |
`gradient-container` Container element.
`color` Accept 2 or 3 colors separated by `;`. Could be string, hex, hsln rgb, rgba...
`amp` How the transition is spread.


