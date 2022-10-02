import { styled } from "../../../styles";

export const Section = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "80px",
  maxWidth: "1440px",

  "&:nth-child(2n+1)": {
    flexDirection: "row-reverse",
  },

});

export const SectionImage = styled("img", {
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
