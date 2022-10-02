import { VPSList } from "../../../@types/rest";
import { Box } from "../../../components/Box";
import { Separator } from "../../../components/Separator";
import { Title } from "../../../components/Title";
import { styled } from "../../../styles";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  types: VPSList[];
  selectedType: string | null;
  setSelectedType: (id: string) => void;
};

const TypeBox = styled(Box, {
  flex: "1 1 25%",
  margin: "5px",
  boxShadow: "none",
  backgroundColor: "rgba(0,0,0,0.2)",
  userSelect: "none",
  textAlign: "center",

  "&, & *": {
    cursor: "$cursor$pointer",
  },

  variants: {
    active: {
      true: {
        boxShadow: "0 0 0 3px $colors$blue",
      },
    },
  },
});

export const VpsType: React.FC<Props> = ({ setSelectedType, types, selectedType }) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Title size="2xl">{t("pages:vps.vps_type")}</Title>
      <Separator />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {types.map((type) => (
          <TypeBox onClick={() => setSelectedType(type.id)} active={selectedType === type.id}>
            <Title as="div" size="xl" css={{ margin: "0", marginBottom: "1rem" }}>
              {type.name}
            </Title>
            <Title size="md" secondary>
              {type.description}
            </Title>
          </TypeBox>
        ))}
      </div>
    </Box>
  );
};
