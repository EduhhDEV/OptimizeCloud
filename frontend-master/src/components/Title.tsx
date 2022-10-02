import { styled } from "../styles";

export const Title = styled("span", {
  margin: "20px 0", 

  variants: {
    size: {
      xxs: {
        fontSize: "0.625rem",
      },
      xs: {
        fontSize: "0.75rem",
      },
      sm: {
        fontSize: "0.875rem",
      },
      md: {
        fontSize: "1rem",
      },
      lg: {
        fontSize: "1.125rem",
      },
      xl: {
        fontSize: "1.25rem",
        fontWeight: 500
      },
      "2xl": {
        fontSize: "1.5rem",
        fontWeight: 600
      },
      "4xl": {
        fontSize: "2rem",
        fontWeight: 600
      },
      "5xl": {
        fontSize: "2.25rem",
        fontWeight: 600
      },
      "6xl": {
        fontSize: "3rem",
        fontWeight: 600,
      },
      "7xl": {
        fontSize: "4rem",
        fontWeight: 600
      },
      "8xl": {
        fontSize: "4.25rem",
        fontWeight: 600
      },
      "9xl": {
        fontSize: "6rem",
        fontWeight: 600
      },
    },

    block: {
      true: {
        display: "block",
      },
    },
    secondary: {
      true: {
        color: "$text$secondary"
      }
    }
  },

  defaultVariants: {
    size: "4xl"
  }
});
