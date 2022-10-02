import { VPSData, VPSList } from "../../@types/rest";
import { Box } from "../../components/Box";
import { ButtonComponent } from "../../components/Button";
import { CleanView } from "../../components/CleanView";
import { Description } from "./components/Description";
import { VpsList } from "./components/VpsList";
import { VpsType } from "./components/VpsType";
import { Title } from "../../components/Title";
import { api } from "../../libs/api";
import { styled } from "../../styles";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const VpsContainer = styled("div", {
  padding: "1.5rem 0",

  display: "flex",
  gap: "30px",

  "@bp2": {
    flexDirection: "column",
  },
});

const Vps: React.FC = () => {
  const { t } = useTranslation();
  const [selectedVps, setSelectedVps] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [types, setTypes] = useState<VPSList[]>([]);
  const [vps, setVps] = useState<VPSData[]>([]);

  useEffect(() => {
    api.get("/vps/list").then(({ data }) => {
      setTypes(data);
      setSelectedType(data[0].id);
    });
  }, []);

  useEffect(() => {
    api.get("/vps/" + selectedType).then(({ data }) => {
      setVps(data);
      setSelectedVps(null);
    });
  }, [selectedType]);

  return (
    <>
      <Description/>
      <VpsContainer>
        <div style={{ display: "flex", flexDirection: "column", flex: "1", gap: "20px" }}>
          <VpsType selectedType={selectedType} setSelectedType={setSelectedType} types={types}/>
          <VpsList selectedVps={selectedVps} setSelectedVps={setSelectedVps} vpslist={vps}/>
        </div>
        <div style={{ flex: "0.7" }}>
          <Box>
            <Title as="div" size="2xl" css={{ marginTop: "0" }}>
              {t("pages:vps.details")}
            </Title>
            <ButtonComponent css={{ width: "100%" }}>{t("common:bought")}</ButtonComponent>
          </Box>
        </div>
      </VpsContainer>
    </>
  );
};
export default Vps;
