import { ThemeOptions } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";
import { deepmerge } from "deepmerge-ts";

function createResponsiveThemes({
  light,
  dark,
}: {
  light: ThemeOptions;
  dark?: ThemeOptions;
}) {
  const theme = responsiveFontSizes(
    createTheme(
      light,
      ptBR
      //
    )
  );

  if (dark) {
    dark = deepmerge(light, dark);
  }

  return {
    light: theme,
    dark: createDarkTheme(dark || light),
  };
}

function createDarkTheme(options: ThemeOptions) {
  if (options?.palette && options.palette?.mode !== "dark") {
    options.palette.mode = "dark";
  }

  return responsiveFontSizes(
    createTheme(
      options,
      ptBR
      //
    )
  );
}

export { createResponsiveThemes };
