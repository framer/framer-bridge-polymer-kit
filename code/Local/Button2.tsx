import * as React from "react";
import { Frame } from "framer";
import { MyButton } from "../component.js";

export function Component() {
  React.useEffect(() => {
    customElements.define("my-element", MyButton);
  }, []);

  return (
    <Frame size={"100%"}>
      <my-element text={"Download App"} />
    </Frame>
  );
}
