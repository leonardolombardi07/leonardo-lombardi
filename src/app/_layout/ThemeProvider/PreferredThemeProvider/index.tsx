"use client";

import * as React from "react";
import { PreferredTheme } from "./constants";
import { useLocalStorage } from "@uidotdev/usehooks";

export { ROBOTO_FONT } from "./themes";

interface SetThemeOptions {
  cache?: boolean;
}

interface ThemeProviderContextValue {
  theme: PreferredTheme;
  setTheme: (theme: PreferredTheme, options?: SetThemeOptions) => void;
}

const PreferredThemeContext =
  React.createContext<ThemeProviderContextValue | null>(null);

function PreferredThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, _setTheme] = useLocalStorage("theme", DEFAULT_THEME);

  const setTheme = React.useCallback(
    (theme: PreferredTheme) => {
      _setTheme(theme);
    },
    [_setTheme]
  );

  return (
    <PreferredThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </PreferredThemeContext.Provider>
  );
}

function usePreferredTheme() {
  const PreferredTheme = React.useContext(PreferredThemeContext);
  if (PreferredTheme === null) {
    throw new Error(
      "usePreferredTheme must be used within a PreferredThemeProvider"
    );
  }
  return PreferredTheme;
}

const DEFAULT_THEME: PreferredTheme = {
  name: "main",
  mode: "light",
};

export default PreferredThemeProvider;
export { usePreferredTheme };
export * from "./themes";
export type { PreferredTheme };
