import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { config, createTheme, css, getCssText, globalCss, keyframes, prefix, reset, styled, theme } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
    },

    theme: {
      background: {
        primary: "#05080F",
        secondary: "#151920",
      },
      colors: {
        blue: "#5A7BE6",
        "blue-dark": "#435CAD",

        yellow: "#E6B65A",
        "yellow-dark": "#AD8843",

        green: "#77DD77",
        "green-dark": "#59A659",

        red: "#E6615A",
        "red-dark": "#B94F49",
      },
      text: {
        primary: "#f0f0f0",
        secondary: "#dddddd",
        tertiary: "#343a40",
        muted: "#909090",
      },
      fonts: {
        default: '"Montserrat", sans-serif',
      },
      cursor: {
        pointer: "pointer",
        normal: "auto",
        unavailiable: "unavailiable",
      },
    },

    media: {
      mx1: "(min-width: 1440px)",

      bp1: "(max-width: 1280px)",
      bp2: "(max-width: 1024px)",
      bp3: "(max-width: 896px)",
      bp4: "(max-width: 768px)",
      bp5: "(max-width: 384px)",
    },

    utils: {
      mx: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });
