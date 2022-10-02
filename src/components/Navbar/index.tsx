import { styled } from "../../styles";
import React, { useState } from "react";
import { NavBrand } from "./NavBrand";
import { NavButton } from "./NavButton";
import { NavLinks } from "./NavLinks";

const Nav = styled("nav", {
  display: "flex",

  minHeight: "70px",
  backgroundColor: "rgba(0,0,0,0.1)",
  boxShadow: "0 0 0 2.5px rgba(0,0,0,0.25)"
});

const NavContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",

  overflow: "hidden",
  width: "1440px",
  maxWidth: "1440px",
  padding: "0 5rem",

  "@bp4": {
    padding: "0 1rem"
  },
  "@mx1": {
    margin: "0 auto"
  },

});

export const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Nav>
      <NavContainer>
        <NavBrand />
        <NavButton activeUpdate={setIsActive} />
        <NavLinks active={isActive} />
      </NavContainer>
    </Nav>
  );
};
