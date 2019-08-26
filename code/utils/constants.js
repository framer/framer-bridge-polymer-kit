import { url } from "framer/resource";

// export let PolymerComponents =
//   "https://unpkg.com/polymer-framer-components/src/my-button.js";

function localPolymerComponentsURL() {
  if (url().includes("/node_modules/")) {
    return url("../../stencil-framer-components/dist/framerxcomponents.js");
  } else {
    return url("/node_modules/polymer-framer-components/src/my-button.js");
  }
}

export const localPolymerComponents = localPolymerComponentsURL();
