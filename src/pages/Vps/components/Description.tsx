import { Box } from "../../../components/Box";
import { Title } from "../../../components/Title";
import { styled } from "../../../styles";
import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionStyle = styled("div", {
  textAlign: "center",
  padding: "2.5rem 0",
});

const AdvantagesContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  // flexWrap: "wrap"

  "@bp3": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Advantage = styled("div", {
  minWidth: "150px",
  maxWidth: "300px",
  padding: "0.5rem",
  marginTop: "5rem",
  marginBottom: "1.5rem",
});
export const Description: React.FC = () => {
  const { t } = useTranslation();
  return (
    <DescriptionStyle>
      <Title as="div">{t("pages:vps.title")}</Title>
      <Title size="md" secondary>{t("pages:vps.description")}</Title>
      <AdvantagesContainer>
        <Advantage>
          <img src="/assets/refund.png" alt="Refund Image" width="112"/>
          <Title as="div" size="xl">{t("pages:vps.advantages.refund.title")}</Title>
          <Title size="md" secondary>{t("pages:vps.advantages.refund.description")}</Title>
        </Advantage>
        <Advantage>
          <img src="/assets/activation.png" alt="Activation Image" width="112"/>
          <Title as="div" size="xl">{t("pages:vps.advantages.activation.title")}</Title>
          <Title size="md" secondary>{t("pages:vps.advantages.activation.description")}</Title>
        </Advantage>
        <Advantage>
          <img src="/assets/ddos.png" alt="Protection Image" width="112"/>
          <Title as="div" size="xl">{t("pages:vps.advantages.ddos.title")}</Title>
          <Title size="md" secondary>{t("pages:vps.advantages.ddos.description")}</Title>
        </Advantage>
      </AdvantagesContainer>
    </DescriptionStyle>
  );
};
