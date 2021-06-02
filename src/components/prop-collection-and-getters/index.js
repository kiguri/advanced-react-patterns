import React, { useState } from "react";

import { Switch } from "../../switch";

const callAll = (...fns) => {
  return (...args) => {
    return fns.forEach((fn) => fn?.(...args));
  };
};

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  function getTogglerProps({ onClick, ...props } = {}) {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  return {
    on,
    toggle,
    getTogglerProps,
  };
}

export const PropCollections = () => {
  const { on, getTogglerProps } = useToggle();
  return (
    <div>
      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button
        {...getTogglerProps({
          "aria-label": "custom-button",
          onClick: () => console.info("onButtonClick"),
          id: "custom-button-id",
        })}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
};
