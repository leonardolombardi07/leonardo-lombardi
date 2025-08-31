"use client";

import { createResponsiveThemes } from "./utils";
import { ROBOTO_FONT } from "./fonts";

export const { light: MAIN_THEME, dark: DARK_MAIN_THEME } =
  createResponsiveThemes({
    light: {
      typography: {
        fontFamily: ROBOTO_FONT.style.fontFamily,
      },
      palette: {
        mode: "light",
        primary: {
          main: "#00426B",
        },
        secondary: {
          main: "#D00C27",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#a5ffc5",
        },
      },
    },
  });
