import { CleanView } from "../../components/CleanView";
import { Landing } from "./components/Landing";
import { Partners } from "./components/Partners";
import { Section, SectionImage } from "./components/Section";
import { Title } from "../../components/Title";
import React from "react";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "280px" }}>
        <Landing />
        <Section>
          <div>
            <Title block>{t("pages:main.about.title")}</Title>
            <Title size="xl" secondary block>
              {t("pages:main.about.description")}
            </Title>
          </div>
          <SectionImage src="/assets/question.svg" />
        </Section>
        <Section>
          <div>
            <Title block>{t("pages:main.choose_us.title")}</Title>
            <Title size="xl" secondary block>
              {t("pages:main.choose_us.description")}
            </Title>
          </div>
          <SectionImage src="/assets/products.svg" />
        </Section>
        <Partners />
      </div>
  );
};

export default Main;
