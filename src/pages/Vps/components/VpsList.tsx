import { VPSData } from "../../../@types/rest";
import { Box } from "../../../components/Box";
import { Separator } from "../../../components/Separator";
import { Title } from "../../../components/Title";
import { styled } from "../../../styles";
import { formatPrice } from "../../../utils/numberutils";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const VpsBox = styled(motion.div, {
  display: "flex",
  transition: "all 0.15s ease-in-out",
  justifyContent: "space-around",
  margin: ".5rem 0",

  borderRadius: "10px",
  userSelect: "none",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.2)",
  padding: "0.5rem 1.5rem",

  "&:hover, & *:hover": {
    cursor: "pointer",
  },

  "@bp4": {
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    textAlign: "center",
  },

  variants: {
    active: {
      true: {
        boxShadow: "0 0 0 3px $colors$blue",
      },
    },
  },
});
const VpsInfo = (props: { title: string; subtitle: string; minitext?: string }) => {
  return (
    <div>
      <Title size="xs">{props.title}</Title>
      <br />
      <Title size="xl">{props.subtitle}</Title>
      {props.minitext != null && <Title size="xs"> {props.minitext}</Title>}
    </div>
  );
};

type Props = {
  vpslist: VPSData[];
  setSelectedVps: (vps_id: number) => void;
  selectedVps: number | null; // VPS ID
};

export const VpsList: React.FC<Props> = ({ setSelectedVps, selectedVps, vpslist: _vpslist }) => {
  const { t } = useTranslation();
  const [list, setList] = useState<VPSData[]>([]);
  const control = useAnimation();

  useEffect(() => {
    (async () => {
      await control.start({ opacity: 0, transition: { duration: 0.25 } });
      await setList(_vpslist);
      await control.start({ opacity: 1, transition: { duration: 0.25 } });
    })();
  }, [_vpslist]);
  return (
    <Box>
      <Title size="2xl">{t("pages:vps.choose_plan")}</Title>
      <Separator />
      <motion.div animate={control}>
        {list.map(({ cpus, id, memory, price, storage, storage_type, cpu_clock }) => (
          <VpsBox key={id} active={selectedVps === id} onClick={() => setSelectedVps(id)}>
            <VpsInfo title={t("common:memory")} subtitle={`${memory}GB`} />
            <VpsInfo title={t("common:storage")} subtitle={`${storage}GB`} minitext={storage_type} />
            <VpsInfo
              title={t("common:vcpu")}
              subtitle={`${cpus}`}
              minitext={cpu_clock ? `(${cpu_clock.toFixed(2)}GHz)` : undefined}
            />
            <VpsInfo title={t("common:price")} subtitle={formatPrice(price, "BRL")} />
          </VpsBox>
        ))}
      </motion.div>
    </Box>
  );
};
