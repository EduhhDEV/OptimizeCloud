import { styled } from "../styles";

export const ButtonComponent = styled("button", {
  fontSize: "1em",
  padding: "0.75em 1em",
  borderRadius: "5px",

  backgroundColor: "$$background",
  color: "$text$primary",
  fontWeight: "500",
  cursor: "$cursor$pointer",
  border: "none",
  transition: "all 0.125s ease-in-out",

  "&:hover": {
    backgroundColor: "$$backgroundHover",
  },
  boxShadow: "0 0 0 3px $$backgroundHover",
  "&:active": {
    transform: "scale(0.95)",
  },
  "&:focus": {
    // boxShadow: "0 0 0 2.5px $background$primary, 0 0 0 5px $colors$blue",
    outline: "none",
  },

  variants: {
    variant: {
      primary: {
        $$background: "$colors$blue",
        $$backgroundHover: "$colors$blue-dark",
      },
      success: {
        $$background: "$colors$green",
        $$backgroundHover: "$colors$green-dark",
      },
      warning: {
        $$background: "$colors$yellow",
        $$backgroundHover: "$colors$yellow-dark",
      },
      danger: {
        $$background: "$colors$red",
        $$backgroundHover: "$colors$red-dark",
      },
    },
    outline: {
      false: {
        boxShadow: "none",
      },
    },
    transparent: {
      true: {
        $$background: "transparent",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
