"use client";

import * as React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import PreferredThemeProvider, {
  usePreferredTheme,
  THEMES,
  PreferredTheme,
} from "./PreferredThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import ClientOnly from "@/components/ClientOnly";
export { ROBOTO_FONT } from "./PreferredThemeProvider/themes";

function WithPreferredTheme({ children }: { children: React.ReactNode }) {
  const { theme: preferredTheme } = usePreferredTheme();

  const theme = React.useMemo(() => {
    const name = preferredTheme.name;
    const mode = preferredTheme.mode;

    try {
      if (mode === "dark") {
        return THEMES[name]["dark"];
      } else {
        return THEMES[name]["light"];
      }
    } catch (error: unknown) {
      console.error(error);
      return THEMES["main"]["light"];
    }
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
