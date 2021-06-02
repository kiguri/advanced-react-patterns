import React from "react";
import { NotCompound } from "./notCompound";
import { Normal } from "./normal";
import { CompoundWithContext } from "./withContext";

export const Compound = () => {
  return (
    <>
      <NotCompound />
      {/* <Normal />
      <CompoundWithContext /> */}
    </>
  );
};
