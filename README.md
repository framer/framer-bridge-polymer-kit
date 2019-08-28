# Polymer Components in Framer X

If you're looking to see how Polymer Web components work inside of Framer X, you're in the right place.

This type of setup not only allows you to fully use Polymer/LitElement components in Framer X, but also to publish and disribute them to the wider team through the Framer X Team Store.

You can check the [Github Repository](https://github.com/addisonschultz/polymer-framer-components) or the [NPM Registry](https://www.npmjs.com/package/polymer-framer-components) for more info on these components and to see what they look like out of the context of Framer X.

## Components

This package contains 4 Web Components, modeled after the components used in the [framer-bridge-starter-kit](https://github.com/framer/framer-bridge-starter-kit). Additionally, these components have added [PropertyControls](https://www.framer.com/api/property-controls/) to visually change the props the components are using. You can use these components in a project by installing [this package](https://store.framer.com/package/addison/polymer-components) to your Framer X Project!

### Button

A flexible button with multiple props to change the appearance.

| Property | Type      | Description           | Default        |
| -------- | --------- | --------------------- | -------------- |
| text     | `string`  | Button text           | `Download App` |
| fluid    | `boolean` | Width of button       | `true`         |
| disabled | `boolean` | Button disabled state | `false`        |
| kind     | `enum`    | Button Kind           | `default`      |

---

### Input

An input field with props to change the appearance.

| Property    | Type      | Description          | Default |
| ----------- | --------- | -------------------- | ------- |
| value       | `string`  | Input value          |         |
| placeholder | `string`  | Input placeholder    | `Email` |
| disabled    | `boolean` | Input disabled state | `false` |
| error       | `boolean` | Input error state    | `false` |

---

### Toggle

A usable toggle with props to change it's state.

| Property | Type      | Description           | Default |
| -------- | --------- | --------------------- | ------- |
| disabled | `boolean` | Toggle disabled state | `false` |
| on       | `boolean` | Toggle on state       | `false` |

---

### Tooltip

A tooltip with props to change the appearance.

| Property | Type      | Description         | Default     |
| -------- | --------- | ------------------- | ----------- |
| arrow    | `enum`    | Arrow direction     | `left`      |
| text     | `string`  | Tooltip text        | `Component` |
| error    | `boolean` | Tooltip error state | `false`     |

---

To learn more feel free to tweet me @addisonschultz.
