import React from "react";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";
import PropTypes from "prop-types";
import Color from "color";

import config from "../../utils/config";

const styles = theme => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    padding: "1em 50px",
    alignItems: "center",
    width: "100%",
    color: theme.footer.colors.text,
    fontSize: ".85em",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      height: theme.footer.sizes.height,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    "& a": {
      borderBottom: `1px solid ${theme.footer.colors.link}`,
      color: theme.footer.colors.link,
      textShadow: `1px 1px ${theme.main.colors.background},
        -1px 1px ${theme.main.colors.background},
        -1px -1px ${theme.main.colors.background},
        -1px 1px ${theme.main.colors.background},
        -1px 0 ${theme.main.colors.background},
        1px 0 ${theme.main.colors.background}`,
      "&:hover": {
        color: theme.footer.colors.linkHover,
        borderBottom: `1px solid ${theme.footer.colors.linkHover}`
      }
    }
  },
  column: {
    textAlign: "center",
    padding: ".2em 0",
    "& b": {
      color: Color(theme.footer.colors.text)
        .lighten(0.5)
        .string()
    },
    "@media (max-width: 599px)": {
      "& span": {
        display: "block",
        padding: ".2em 0"
      },
      "& b": {
        display: "none"
      }
    }
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        Contact: <Obfuscate email={config.contactEmail} />
      </div>
      <div className={classes.column}>
        <span>
          Built with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>{" "}
          &{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
        </span>{" "}
        <b>|</b>{" "}
        <span>
          Hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </span>{" "}
        <b>|</b>{" "}
        <span>
          Credits:{" "}
          <a
            href="https://unsplash.com/photos/22mlwLRBlj0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photo
          </a>,{" "}
          <a
            href="http://creativecrunk.com/google-pixel-psd-mockup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone
          </a>{" "}
          <a
            href="http://creativecrunk.com/google-pixel-psd-mockup-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mockups
          </a>
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Footer);
