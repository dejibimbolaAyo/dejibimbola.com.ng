import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const Heading = {
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "1.2",
    color: "brand.500",
  },
  sizes: {
    xl: {
      fontSize: "4xl",
    },
    lg: {
      fontSize: "3xl",
    },
    md: {
      fontSize: "2xl",
    },
    sm: {
      fontSize: "xl",
    },
    xs: {
      fontSize: "lg",
    },
  },
  variants: {
    hero: {
      fontSize: "6xl",
      lineHeight: "1.2",
      color: "brand.50",
      fontFamily: dmSerifDisplay.style.fontFamily,
    },
  },
  defaultProps: {
    size: "xl",
  },
};

export default Heading;
