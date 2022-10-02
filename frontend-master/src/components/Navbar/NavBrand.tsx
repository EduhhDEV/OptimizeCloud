import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../../styles";

const Brand = styled(Link, {
  textTransform: "uppercase",
  fontWeight: "800",
  lineHeight: "70px",
  fontSize: "1.5em",
  color: "$colors$blue",
});

export const NavBrand: React.FC = () => {
  return <Brand to={"/"}>Optimize</Brand>;
};
