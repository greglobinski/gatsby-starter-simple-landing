import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import theme from "../styles/theme";
import globals from "../styles/globals";
import SEO from "../components/shared/SEO";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <SEO />
          {children()}
        </div>
      </MuiThemeProvider>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired
};

export default injectSheet(globals)(Template);
