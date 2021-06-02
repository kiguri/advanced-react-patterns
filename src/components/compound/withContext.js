import React, { createContext, useContext, useState } from "react";

import { Switch } from "../../switch";

const ToggleContext = createContext(undefined);

const useToggle = () => {
  return useContext(ToggleContext);
};

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};
const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return on ? null : children;
};

const ToggleButton = ({ ...props }) => {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...props} />;
};

export const CompoundWithContext = () => {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  );
};
