import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

type Props = {
  disabled: boolean;
  on: boolean;
  onClick: () => void;
};

export function Toggle(props: Props) {
  return (
    <Frame size={"100%"} background={""}>
      {/* 
      // @ts-ignore */}
      <my-toggle
      //@TODO Fix disabled handling
      // disabled={props.disabled}
      //@TODO Fix on handling
      // on={props.on}
      />
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(Toggle, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  on: { title: "On", type: ControlType.Boolean, defaultValue: false }
});

Toggle.defaultProps = {
  height: 36,
  width: 64
};
