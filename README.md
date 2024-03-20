# &#128337; &lt;wc-clock/&gt; &#128337;

It is a web component written in `JavaScript/HTML/CSS` and without any
dependencies. <br>
`wc-clock` allows to display an Analog clock and be customized based on its _HTML_ attributes and _CSS_ variables.

[![npm version](https://img.shields.io/npm/v/%40k4ys4r%2Fwc-clock)](https://www.npmjs.com/package/@k4ys4r/wc-clock)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@k4ys4r/wc-clock)
[![GitHub License](https://img.shields.io/github/license/k4ys4r/wc-clock)](LICENSE)

## Installation

```bash
# with npm
npm i @k4ys4r/wc-clock

#with yarn
yarn add @k4ys4r/wc-clock
```

Once installed, import it in your application:

```js
import "@k4ys4r/wc-clock";

//To get access to the Class properties
import { ClockComponent } from "@k4ys4r/wc-clock";
```

Or, you can imported from CDN :

```js
import "https://cdn.skypack.dev/@k4ys4r/wc-clock";
```

Or in html script:

```html
<script type="module" src="https://cdn.skypack.dev/@k4ys4r/wc-clock"></script>
```

## Usage

1. Make sure you've add `wc-clock` to your app through NPM. See [Installation](#installation) for more details.
2. Add `wc-clock` to your app and placed it at the top.
3. Then it can be used like below:

```html
<wc-clock></wc-clock>
```

### Usage of `<wc-clock/>` attributes

`wc-clock` has four attributes can be used to be customized:

```html
<wc-clock hours-ticks minutes-ticks time-zone fixed-time></wc-clock>
```

- `hours-ticks` is used to display the 12 hours ticks on the clock
- `minutes-ticks` is used to display the 48 minutes ticks on the clock
- `time-zone` is used to define the time zone (default value _Europe/Paris_). A valid value must be included in the supported time zone value:

  ```js
  Intl.supportedValuesOf("timeZone");
  // that gives an array of strings :
  /*"Africa/Abidjan"
  "Africa/Accra"
  "Africa/Addis_Ababa"
  "Africa/Algiers"
  "Africa/Asmera"
  "Africa/Bamako"
  "Africa/Bangui"
  "Africa/Banjul"
  ...
  ...
  */
  ```

- `fixed-time` is used to a fixed time without updating of clock hands. Its value format : format `hh:mm:ss` (default value is _10:10:30_)

#### Dynamic creation of `wc-clock`

```js
// import class component
import { ClockComponent } from "@k4ys4r/wc-clock";

// Create wc-clock element
let wcClock = document.createElement(ClockComponent.tagName);

// set of attributes
wcClock.setAttribute(ClockComponent.attributes["fixed-time"], "");
wcClock.setAttribute(ClockComponent.attributes["hours-labels"], [3, 6, 9, 12]);
wcClock.setAttribute(ClockComponent.attributes["hours-ticks"], "");
wcClock.setAttribute(ClockComponent.attributes["minutes-ticks"], "");

// remove of attributes
wcClock.removeAttribute(ClockComponent.attributes["fixed-time"]);
wcClock.setAttribute(ClockComponent.attributes["minutes-ticks"], "");
```

### CSS style

`wc-clock` has different CSS variables can be used to style some part of the web component.
All variables and their default values are listed below:

```html
<style>
  wc-clock {
    --hours-hand-color: #b9b9b9;
    --minutes-hand-color: #b9b9b9;
    --seconds-hand-color: #ff3434;
    --clock-background-color: #1a1a1aff;
    --clock-color: #fff;
    --clock-width: 10rem;
    --seconds-hand-width: 1;
    --seconds-hand-height: 4;
    --minutes-hand-width: 6;
    --minutes-hand-height: 4;
    --hours-hand-width: 6;
    --hours-hand-height: 3;
    --clock-font-size: 1rem;
    --clock-font: Arial, Helvetica, sans-serif;
    --clock-hours-ticks-color: #fff;
    --clock-minutes-ticks-color: #ffffff90;
    --clock-hours-ticks-height: 0.45rem;
    --clock-hours-ticks-width: 0.15rem;
    --clock-minutes-ticks-height: 0.23rem;
    --clock-minutes-ticks-width: 0.05rem;
  }
</style>
```

### Example

- [![Demo](https://img.shields.io/badge/🕑%20Demo-gray?)][home-page]

- [![Usage with Vue](https://img.shields.io/badge/Usage%20with%20VueJs-green?logo=vue.js)][wc-clock-vue]
- [![Usage with React](https://img.shields.io/badge/Usage%20with%20ReactJs-blue?logo=react)][wc-clock-react]

[wc-clock-react]: https://stackblitz.com/edit/wc-clock-reactjs?file=src%2FApp.jsx
[wc-clock-vue]: https://stackblitz.com/edit/wc-clock-vuejs?file=src%2FApp.vue
[home-page]: https://k4ys4r.github.io/wc-clock

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😊

## License

[![GitHub License](https://img.shields.io/github/license/k4ys4r/wc-clock)](LICENSE)
