import { styled } from "../styles";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronDown } from "react-icons/bs";

const LanguageSelectorContainer = styled("div", {
  cursor: "$cursor$pointer",
  display: "flex",
  width: "fit-content",
  position: "relative",
  alignItems: "center",
  fontSize: "0.875rem",
  padding: "0.5rem 0",
  userSelect: "none",
  img: {
    margin: "0 5px",
  },
});

const LanguageSelectorDowndown = styled("div", {
  position: "absolute",
  top: "-250%",
  right: "0",
  width: "fit-content",
  borderRadius: "5px",
  boxShadow: "0 0 5px 3px rgba(0,0,0,0.5)",
  backgroundColor: "$background$primary"
});

const Selector = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0.75rem 0.875rem",
  cursor: "pointer",
});

export const LanguageSelector: React.FC = () => {
  const [isDropdownActive, setDropdownActive] = useState(false)
  const { i18n, t } = useTranslation();
  const languages = Object.keys(i18n.services.resourceStore.data);

  return (
    <LanguageSelectorContainer onClick={() => setDropdownActive(!isDropdownActive)}>
      <img src={`/assets/flags/${i18n.language}.png`} alt={"Imagem do país"} width="25" />
      {t("common:language")}
      <BsChevronDown />
      {isDropdownActive && <LanguageSelectorDowndown>
        {languages.map((language) => (
          <Selector key={language} onClick={() => i18n.changeLanguage(language)}>
            <img src={`/assets/flags/${language}.png`} width="25" />
            <>{i18n.getFixedT(language)("common:language")}</>
          </Selector>
        ))}
      </LanguageSelectorDowndown>}
    </LanguageSelectorContainer>
  );
};
