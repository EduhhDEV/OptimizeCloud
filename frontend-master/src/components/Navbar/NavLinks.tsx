import { styled } from "../../styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaBalanceScale, FaDiscord, FaHome } from "react-icons/fa";
import { TbServer2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const NavLinksStyle = styled("div", {
  "@bp2": {
    flexBasis: "100%",
    flexGrow: 1,

    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height .5s ease",
  },

  variants: {
    active: {
      true: {
        transition: "max-height .5s ease-in",
        maxHeight: "100vh",
        // marginBottom: "1rem",
      },
    },
  },
});

const Ul = styled("ul", {
  display: "flex",
  margin: 0,
  padding: 0,
  listStyle: "none",
  alignItems: "center",

  "@bp2": {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "1rem",
  },
});

const Li = styled("li", {});

const Link = styled(NavLink, {
  color: "$text$secondary",
  padding: "1rem",
  display: "block",

  "&:hover": {
    color: "$text$primary",
  },

  "&.active": {
    color: "white",
  },

  "@bp2": {
    padding: "1rem 0",
  },
});

export const NavLinks: React.FC<{ active: boolean }> = ({ active }) => {
  const { t } = useTranslation();

  const links = [
    {
      name: t("common:navbar.home"),
      to: "/",
      icon: <FaHome />,
    },
    {
      name: t("common:navbar.servers"),
      to: "/serversvps",
      icon: <TbServer2 />,
    },
    {
      name: t("common:navbar.terms"),
      to: "/terms",
      icon: <FaBalanceScale />,
    },
    {
      name: t("common:navbar.discord"),
      icon: <FaDiscord />,
      to: "/discord",
      target: "_blank",
    },
  ];

  return (
    <NavLinksStyle active={active}>
      <Ul>
        {links.map(({ name, to, icon, target }) => (
          <Li key={name}>
            <Link to={to} {...(target ? { target } : {})}>
              {icon}
              {name}
            </Link>
          </Li>
        ))}
      </Ul>
    </NavLinksStyle>
  );
};
