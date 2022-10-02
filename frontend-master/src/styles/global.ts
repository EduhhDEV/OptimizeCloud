import { globalCss } from "@stitches/react";

export const globalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
    fontFamily: "$fonts$default",
    cursor: "$cursor$normal",
  },
  "html,body": {
    padding: "0",
    margin: "0",
    fontFamily: '"Montserrat", sans-serif',
    color: "$text$primary",
    backgroundColor: "$background$primary",
    // fontSize: "16px",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    cursor: "$cursor$pointer",
  },
  "h1,h2,h3,h4": {
    margin: "5px",
  },

  "::-webkit-scrollbar": {
    width: "16px",
    padding: "10px",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "$colors$blue",
    borderRadius: "8px",
    backgroundClip: "content-box",
    border: "4px solid transparent",
  },
});
