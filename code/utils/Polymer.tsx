import { MyButton } from "polymer-framer-components/src/my-button";

function Polymer() {
  const PolymerButton = !!customElements.get("my-button");
  if (PolymerButton) {
    console.log("Found button already");
    return;
  } else {
    customElements.define("my-button", MyButton);
  }
}

Polymer();
