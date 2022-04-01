import React, { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

export const ThemeContextProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
