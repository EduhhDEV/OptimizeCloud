import { styled } from "../styles";
import React from "react";

const BoxStyle = styled("div", {
  display: "block",
  background: "$background$secondary",
  // width: "100%",
  borderRadius: "10px",
  // margin: "1rem",
  padding: "2rem 1.5rem",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.4)",


  "@bp5": {
    padding: "1rem",
  },

  variants: {
    padding: {
      xs: {
        padding: "0.125rem",
      },
      sm: {
        padding: "0.5rem",
      },
      md: {
        padding: "1rem",
      },
      lg: {
        padding: "2rem",
      },
      xl: {
        padding: "3.5rem",
      },
    },
    fitContent: {
      true: {
        width: "fit-content",
      },
    },
  },
});

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return <BoxStyle {...props}>{children}</BoxStyle>;
};
