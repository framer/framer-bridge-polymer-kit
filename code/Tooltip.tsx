import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

type Props = {
  arrow: "top" | "right" | "bottom" | "left";
  error: boolean;
  text: string;
};

export function Tooltip(props: Props) {
  return (
    <Frame size={"100%"} background={""}>
      {/* 
      // @ts-ignore */}
      <my-tooltip
        arrow={props.arrow}
        error={props.error ? true : undefined}
        text={props.text}
      />
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(Tooltip, {
  arrow: {
    title: "Arrow",
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["Top", "Right", "Bottom", "Left"],
    type: ControlType.Enum,
    defaultValue: "left"
  },
  error: { title: "Error", type: ControlType.Boolean, defaultValue: false },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Component"
  }
});

Tooltip.defaultProps = {
  height: 23,
  width: 68
};
