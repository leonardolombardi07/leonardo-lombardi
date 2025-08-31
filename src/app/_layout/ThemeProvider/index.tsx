"use client";

import * as React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import PreferredThemeProvider, {
  usePreferredTheme,
  THEMES,
  PreferredTheme,
} from "./PreferredThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ClientOnly from "@/components/ClientOnly";
export { ROBOTO_FONT } from "./PreferredThemeProvider/themes";

function WithPreferredTheme({ children }: { children: React.ReactNode }) {
  const { theme: preferredTheme } = usePreferredTheme();

  const theme = React.useMemo(() => {
    const name = preferredTheme.name;
    const mode = preferredTheme.mode;

    if (mode === "dark") {
      return THEMES[name]["dark"];
    }
    return THEMES[name]["light"];
  }, [preferredTheme.name, preferredTheme.mode]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ClientOnly>
        <PreferredThemeProvider>
          <WithPreferredTheme>{children}</WithPreferredTheme>
        </PreferredThemeProvider>
      </ClientOnly>
    </AppRouterCacheProvider>
  );
}

export { usePreferredTheme, THEMES };
export type { PreferredTheme };
