import { styled } from "../../styles";
import React, { useEffect, useState } from "react";

const NavBnt = styled("div", {
  display: "none",
  width: "30px",
  height: "30px",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "$cursor$pointer",

  "@bp2": {
    display: "flex",
  },
  span: {
    cursor: "pointer",
    display: "block",
    height: "2px",
    borderRadius: "10px",
    width: "100%",
    backgroundColor: "white",
    margin: "2.75px 0",
    transition: "all .5s ease-in-out",
  },

  variants: {
    active: {
      true: {
        span: { margin: 0 },
        "span:nth-child(1)": {
          transform: "translate(0, 100%) rotateZ(45deg)",
        },
        "span:nth-child(3)": {
          transform: "translate(0, -100%) rotateZ(-45deg)",
        },
        "span:nth-child(2)": {
          opacity: 0,
        },
      },
    },
  },
});

export const NavButton: React.FC<{ activeUpdate: (isActive: boolean) => void }> = ({ activeUpdate }) => {
  const [active, setActive] = useState(false);
  useEffect(() => activeUpdate(active), [active]);

  return (
    <NavBnt active={active} onClick={() => setActive(!active)}>
      <span></span>
      <span></span>
      <span></span>
    </NavBnt>
  );
};
