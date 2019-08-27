import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

type Props = {
  value: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
};

export function Input(props: Props) {
  return (
    <Frame size={"100%"} background={""}>
      {/* 
      // @ts-ignore */}
      <my-input
        value={props.value}
        placeholder={props.placeholder}
        // @TODO Fix disabled styling
        // disabled={props.disabled}
        // @TODO Fix error styling
        // error={props.error}
      />
    </Frame>
  );
}

//@ts-ignore
addPropertyControls(Input, {
  value: { title: "Value", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "Email"
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false
  },
  error: { title: "Error", type: ControlType.Boolean, defaultValue: false }
});

Input.defaultProps = {
  height: 50,
  width: 150
};
