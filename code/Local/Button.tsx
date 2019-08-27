import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
// import { useScript } from "../utils/useScript";
// import { localPolymerComponents } from "../utils/constants";
// import { LitElement, html, css } from "lit-element";
// import "../polymer/button.js";
// import { url } from "framer/resource";

type Props = {
  text: string;
  fluid: boolean;
  disabled: boolean;
  kind?: "default" | "primary" | "danger";
};

export function Button(props: Props) {
  // console.log(url());

  // console.log(localPolymerComponents);

  // const [loaded, error] = useScript(
  //   "/node_modules/polymer-framer-components/src/my-button.js"
  // );

  // React.useEffect(() => {
  //   if (!loaded) return;
  // }, [loaded, error]);

  React.useEffect(() => {
    console.log("Mounted");
  }, []);

  // const PolymerButton = React.useMemo(() => {
  //   return (
  //     //@ts-ignore
  //     <my-button
  //       text={props.text}
  //       fluid={props.fluid}
  //       disabled={props.disabled}
  //       kind={props.kind}
  //       style={"height: 50px; width: 150px;"}
  //     />
  //   );
  // }, [props]);

  return (
    // <Frame size={"100%"} background={""}>
    //   {loaded && !error ? PolymerButton : <b>Something went wrong!</b>}
    // </Frame>
    <Frame size={"100%"} background={""}>
      {/* <my-button text={"Download App"} style={"height: 50px; width: 150px;"} /> */}
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(Button, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Download App"
  },
  fluid: { title: "Fluid", type: ControlType.Boolean, defaultValue: true },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  kind: {
    title: "Kind",
    options: ["default", "primary", "danger"],
    optionTitles: ["Default", "Primary", "Danger"],
    type: ControlType.Enum,
    defaultValue: "default"
  }
});

Button.defaultProps = {
  height: 50,
  width: 150
};
