import { PartnerData } from "../../../@types/rest";
import { Title } from "../../../components/Title";
import { api } from "../../../libs/api";
import { keyframes, styled } from "../../../styles";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "./Section";

const Partner = styled("img", {
  width: "128px",

  mx: "35px",
  borderRadius: "50%",
});

const PartnerContainer = styled("div", {
  width: "fit-content",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const PartnerList = styled("div", {
  display: "inline-block",

  animationName: keyframes({
    "0%, 4%": {
      transform: "translate(0,0)",
    },
    "5%, 14%": {
      transform: "translate(-10%,0)",
    },
    "15%, 24%": {
      transform: "translate(-20%,0)",
    },
    "25%, 34%": {
      transform: "translate(-30%,0)",
    },
    "35%, 44%": {
      transform: "translate(-40%,0)",
    },
    "45%, 54%": {
      transform: "translate(-50%,0)",
    },
    "55%, 64%": {
      transform: "translate(-60%,0)",
    },
    "65%, 74%": {
      transform: "translate(-70%,0)",
    },
    "75%, 84%": {
      transform: "translate(-80%,0)",
    },
    "85%, 94%": {
      transform: "translate(-90%,0)",
    },
    "95%, 100%": {
      transform: "translate(-100%,0)",
    },
  }).toString(),
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationDuration: "25s",
});

export const Partners: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const { t } = useTranslation();
  const [partners, setPartners] = useState<PartnerData[]>([]);

  useEffect(() => {
    api.get("/partners").then(({ data }) => {
      setPartners(data);
    });
  }, []);
  return (
    <Section css={{ flexDirection: "column" }} data-aos="fade-up">
      <Title block>{t("common:partners")}</Title>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", marginTop: "40px" }}>
        {partners.length < 1 ? null : (
          <PartnerContainer>
            <PartnerList>
              {partners.map((partner) => (
                <Partner src={partner.image_url+"?size=100"} width="100" alt="Partner Image" key={partner.name}></Partner>
              ))}
            </PartnerList>
            <PartnerList>
              {partners.map((partner) => (
                <Partner src={partner.image_url+"?size=100"} width="100" alt="Partner Image" key={partner.name}></Partner>
              ))}
            </PartnerList>
          </PartnerContainer>
        )}
      </div>
    </Section>
  );
};
