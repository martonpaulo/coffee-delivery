export const defaultTheme = {
  colors: {
    white: "#FFF",

    background: "#FAFAFA",
    baseCard: "#F3F2F2",
    baseInput: "#EDEDED",
    baseButton: "#E6E5E5",
    baseHover: "#D7D5D5",
    baseLabel: "#8D8686",
    baseText: "#574F4D",
    baseSubtitle: "#403937",
    baseTitle: "#272221",

    lightYellow: "#F1E9C9",
    yellow: "#DBAC2C",
    darkYellow: "#C47F17",

    lightPurple: "#EBE5F9",
    purple: "#8047F8",
    darkPurple: "#4B2995",
  },

  breakpoints: {
    sm: "@media (max-width: 480px)",
    md: "@media (min-width: 481px) and (max-width: 768px)",
    lg: "@media (min-width: 769px) and (max-width: 1188px)",
    xl: "@media (min-width: 1189px)",

    min: {
      md: "@media (min-width: 481px)",
      lg: "@media (min-width: 1189px)",
    },

    max: {
      md: "@media (max-width: 768px)",
      lg: "@media (max-width: 1188px)",
    },
  },

  fonts: {
    title: "'Baloo 2', sans-serif",
    text: "'Roboto', sans-serif",
  },

  fontSizes: {
    titleXL: "3rem", // 48px
    titleL: "2rem", // 32px
    titleM: "1.5rem", // 24px
    titleS: "1.25rem", // 20px
    titleXS: "1.125rem", // 18px
    textL: "1.25rem", // 20px
    textM: "1rem", // 16px
    textS: "0.875rem", // 14px
    textXS: "0.75rem", // 12px
    tag: "0.625rem", // 10px
    buttonG: "0.875rem", // 14px
    buttonM: "0.75rem", // 12px
  },

  lineHeights: {
    default: "130%",
    button: "160%",
  },

  fontWeights: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },

  sizes: {
    pageWidth: "72rem",
  },
};
