import { styled } from "../../styles";
import React from "react";
import ReactMarkdown from "react-markdown";
import { CleanView } from "../../components/CleanView";
import { terms } from "./terms";

const TermsContainer = styled("div", {
  padding: "20px 0",
});

const Terms: React.FC = () => {
  return (
      <TermsContainer>
        <ReactMarkdown children={terms} />
      </TermsContainer>
  );
};

export default Terms;
