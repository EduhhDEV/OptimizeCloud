import { styled } from "../styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { LanguageSelector } from "./LanguageSelector";
import { Title } from "./Title";

const FooterContainer = styled("footer", {
  marginTop: "120px",

  padding: "2.5rem 5rem",
  background: "rgba(0,0,0,0.15)",

  "@bp4": {
    padding: " 2.5rem 0.5rem",
  },
});

const FooterContents = styled("div", {
  maxWidth: "1440px",

  mx: "auto",
});

const FooterTop = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const FooterTopLeft = styled("div", {
  maxWidth: "350px",
});

const FooterBottom = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const FooterLogo = styled("span", {
  color: "$colors$blue",
  fontWeight: "700",
  fontSize: "1.5em",
});

const FooterSeparator = styled("hr", {
  margin: "2.5rem 0",
  outline: "none",
  backgroundColor: "$colors$blue",
  border: "1px solid $colors$blue",
  borderRadius: "10px",
});

const FooterSociais = styled("div", {
  my: "25px",

  a: {
    fontSize: "25px",
  },
});

const VersionTag = styled("span", {
  mx: "10px",
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "rgba(0, 0,0, 0.2)",
  borderRadius: "5px",
  padding: "0.125rem 0.5rem",
  fontSize: "0.75rem",
});
export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContents>
        <FooterTop>
          <FooterTopLeft>
            <Title size="5xl" css={{ color: "$colors$blue" }}>
              {t("common:footer.text")}
            </Title>
            <FooterSociais>
              <a href="https://discord.com" target="_blank" aria-label="Join on discord">
                <FaDiscord />
              </a>
              <a href="https://twitter.com/OptimizeCloud_" target="_blank" aria-label="Follow us on twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVanc8Twc1UdhMWRxon9UqA"
                target="_blank"
                aria-label="Subscrite on youtube"
              >
                <FaYoutube />
              </a>
            </FooterSociais>
            <div style={{ marginTop: "20px" }}>
              <Title size="xs" block>
                Created with ❤ by Optimize Development Team
              </Title>
            </div>
          </FooterTopLeft>
        </FooterTop>
        <FooterSeparator />
        <FooterBottom>
          <FooterLogo>
            OPTIMIZE
            <VersionTag>v1.0</VersionTag>
          </FooterLogo>
          <LanguageSelector />
        </FooterBottom>
      </FooterContents>
    </FooterContainer>
  );
};
