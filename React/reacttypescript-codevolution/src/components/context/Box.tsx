import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: themeContext.primary.main,
        color: themeContext.primary.text,
      }}
    >
      Box
    </div>
  );
};
