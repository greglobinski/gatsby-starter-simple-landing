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
  },
  links: {
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    "& li": {
      display: "block",
      margin: ".3em 0",
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        display: "inline-block",
        margin: "0 .7em 0 0",
        "&:after": {
          content: "'|'",
          margin: "0 0 0 1em",
          color: Color(theme.footer.colors.text)
            .lighten(0.5)
            .string()
        },
        "&:last-child": {
          "&:after": {
            content: "''"
          }
        }
      }
    }
  }
});

const Footer = ({ classes, data }) => {
  const links = data.content.edges.find(el => el.node.frontmatter.title === "footer").node.html;

  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        Contact: <Obfuscate email={config.contactEmail} />
      </div>
      <div
        className={`${classes.column} ${classes.links}`}
        dangerouslySetInnerHTML={{ __html: links }}
      />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default injectSheet(styles)(Footer);
