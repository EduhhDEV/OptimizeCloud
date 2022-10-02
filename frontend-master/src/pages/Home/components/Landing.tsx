import { ButtonComponent } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { styled } from "../../../styles";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BiPaperPlane } from "react-icons/bi";

const VpsImage = styled("img", {
  "@bp1": {
    width: "400px",
  },
  "@bp2": {
    width: "350px",
  },
  "@bp3": {
    display: "none",
  },
});

const LandingContainer = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "calc(100vh - 70px)",
  maxWidth: "1440px",
  width: "100%",

  "@mx1": {
    mx: "auto",
  },

  "&::before": {
    content: "",
    position: "absolute",
    left: "0",
    bottom: 0,
    // backgroundImage: "url(/assets/background.svg)",
    backgroundRepeat: "revert",
    height: "200px",
    width: "100%",
  },
});

const Texts = styled("div", {
  maxWidth: "700px",
});

const Seta = styled("img", {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)",
  bottom: "20px",
});

export const Landing: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const redirectToPlans = () => {
    navigate("/serversvps", { replace: true });
  };

  return (
    <LandingContainer>
      <Texts>
        <Title size={"5xl"} block>
          {t("pages:main.title")}
        </Title>
        <Title size={"xl"} secondary block>
          {t("pages:main.description")}
        </Title>
        <ButtonComponent onClick={redirectToPlans} css={{ margin: "10px 0" }}>
          <BiPaperPlane />
          {t("common:view_plans")}
        </ButtonComponent>
      </Texts>
      <VpsImage src="/assets/vps.svg" alt={"vps"} width="600" />
      <Seta src="/assets/seta.svg" alt="seta" width="60" />
    </LandingContainer>
  );
};
