import React, { Children, cloneElement, useState } from "react";

import { Switch } from "../../switch";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return Children.map(children, (child) => {
    return cloneElement(child, { on, toggle });
  });
};

const ToggleOn = ({ on, children }) => (on ? children : null);

const ToggleOff = ({ on, children }) => (on ? null : children);

const ToggleButton = ({ on, toggle, ...props }) => (
  <Switch on={on} onClick={toggle} {...props} />
);

export const Normal = () => {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  );
};
