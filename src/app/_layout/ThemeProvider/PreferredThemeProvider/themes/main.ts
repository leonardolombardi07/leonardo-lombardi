"use client";

import { createResponsiveThemes } from "./utils";
import { ROBOTO_FONT } from "./fonts";

export const { light: MAIN_THEME, dark: DARK_MAIN_THEME } =
  createResponsiveThemes({
    light: {
      typography: {
        fontFamily: ROBOTO_FONT.style.fontFamily,
        fontSize: 12, // Base font size (rem-based; defaults to 14, so this shrinks everything ~14%).
        h4: { fontSize: "1.6rem" }, // Smaller header.
        h5: { fontSize: "1.2rem" },
        h6: { fontSize: "1rem" },
        body1: { fontSize: "0.9rem" },
        body2: { fontSize: "0.85rem" },
        subtitle1: { fontSize: "0.75rem" },
        subtitle2: { fontSize: "0.7rem" },
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
