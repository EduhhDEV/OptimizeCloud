import { styled } from "../styles";
import React from "react";

const CleanViewStyle = styled("div", {
  padding: "0 5rem",
  maxWidth: "1440px",
  margin: "0 auto",

  "@bp4": {
    padding: "0 1rem",
  },
});

export const CleanView: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <CleanViewStyle>{children}</CleanViewStyle>;
};
