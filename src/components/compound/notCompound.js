import React, { useState } from "react";

import { Switch } from "../../switch";

const ToggleOn = ({ on }) => (on ? "This button is on" : null);

const ToggleOff = ({ on }) => (on ? null : "This button is off");

const ToggleButton = ({ on, toggle, ...props }) => (
  <Switch on={on} onClick={toggle} {...props} />
);

const Toggle = ({ on, toggle, ...props }) => {
  return (
    <>
      <ToggleOn on={on} />
      <ToggleOff on={on} />
      <ToggleButton on={on} toggle={toggle} {...props} />
    </>
  );
};

export const NotCompound = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return <Toggle on={on} toggle={toggle}></Toggle>;
};
