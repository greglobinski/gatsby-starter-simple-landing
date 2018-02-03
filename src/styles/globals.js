import Color from "color";
import theme from "./theme";

const globals = {
  "@global": {
    html: {
      boxSizing: "border-box",
      "-webkit-text-size-adjust": "100%",
      "-moz-text-size-adjust": "none",
      "-ms-text-size-adjust": "100%",
      fontFamily: theme.main.fonts.unstyled,
      background: theme.main.background
    },
    "html.wf-active": {
      fontFamily: theme.main.fonts.unstyled
    },
    "*, *:before, *:after": {
      boxSizing: "inherit"
    },
    body: {},
    a: {
      fontWeight: "bold",
      textShadow: `2px 2px ${theme.main.colors.background},
        -2px 2px ${theme.main.colors.background},
        -2px -2px ${theme.main.colors.background},
        -2px 2px ${theme.main.colors.background},
        -2px 0 ${theme.main.colors.background},
        2px 0 ${theme.main.colors.background}`,
      display: "inline-block",
      lineHeight: "1.1",
      textDecoration: "none",
      transition: "0.3s"
    },
    [`@media (min-device-width: ${theme.mediaQueryTresholds.L + 1}px)`]: {
      "*::-webkit-scrollbar": {
        width: "6px"
      },
      "*::-webkit-scrollbar-track": {
        background: Color(theme.main.colors.background)
          .darken(0.1)
          .string()
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: Color(theme.main.colors.background)
          .darken(0.2)
          .string()
      }
    }
  }
};

export default globals;
