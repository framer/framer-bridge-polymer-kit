import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

type Props = {
  text: string;
  fluid: boolean;
  disabled: boolean;
  kind?: "default" | "primary" | "danger";
};

export function Button(props: Props) {
  return (
    <Frame size={"100%"} background={""}>
      {/* 
      // @ts-ignore */}
      <my-button
        text={props.text}
        fluid={props.fluid}
        // @TODO Fix disabled styling
        // disabled={props.disabled}
        kind={props.kind}
      />
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
