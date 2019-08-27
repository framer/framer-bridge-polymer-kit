import { MyButton } from "polymer-framer-components/src/my-button";
import { MyInput } from "polymer-framer-components/src/my-input";
import { MyToggle } from "polymer-framer-components/src/my-toggle";
import { MyTooltip } from "polymer-framer-components/src/my-tooltip";

function Polymer() {
  const PolymerButton = !!customElements.get("my-button");
  const PolymerInput = !!customElements.get("my-input");
  const PolymerToggle = !!customElements.get("my-toggle");
  const PolymerTooltip = !!customElements.get("my-tooltip");
  if (PolymerButton) {
    console.log("Found button already");
    return;
  }
  if (PolymerInput) {
    console.log("Found input already");
    return;
  }
  if (PolymerToggle) {
    console.log("Found toggle already");
    return;
  }
  if (PolymerTooltip) {
    console.log("Found tooltip already");
    return;
  } else {
    customElements.define("my-button", MyButton);
    customElements.define("my-input", MyInput);
    customElements.define("my-toggle", MyToggle);
    customElements.define("my-tooltip", MyTooltip);
  }
}

Polymer();
