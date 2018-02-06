import React from "react";
import { JssProvider, SheetsRegistry } from "react-jss";
import { renderToString } from "react-dom/server";

function minifyCssString(css) {
  return css.replace(/\n/g, "").replace(/\s\s+/g, " ");
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new SheetsRegistry();

  replaceBodyHTMLString(
    renderToString(<JssProvider registry={sheets}>{bodyComponent}</JssProvider>)
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: minifyCssString(sheets.toString()) }}
    />
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      key={`webfontsloader-preload`}
      rel="preload"
      href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      as="script"
    />
  ]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      key={`webfontsloader-setup`}
      dangerouslySetInnerHTML={{
        __html: `
        WebFontConfig = {
          google: {
      families: ["Open Sans:300,400"]
    }
   };

   (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
   })(document);`
      }}
    />
  ]);
};
