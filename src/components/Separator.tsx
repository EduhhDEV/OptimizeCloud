import { styled } from "../styles";
import React from "react";

const SeparatorStyle = styled("div", {
  my: "20px",
  width: "100%",
  height: "2.5px",
  borderRadius: "10px",
  backgroundColor: "$text$tertiary",
});

export const Separator: React.FC = () => {
  return <SeparatorStyle />;
};
