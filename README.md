# SimpleLanding starter for Gatsby

[DEMO website](https://gssl.greglobinski.com/)

![](static/screens/screens.jpg)

This is a starter/theme for [Gatsby](https://github.com/gatsbyjs/gatsby).

## Description

SimpleLanding lets you create optimized and ready to use landing page with no effort.

The starter uses the css-in-js library [JSS](https://github.com/cssinjs/jss) and its integration
for React [React-JSS](https://github.com/cssinjs/react-jss) to declare and mantain CSS styles.

## Setup

If you are completely new to Gatsby, start with one of its
[official starters](https://www.gatsbyjs.org/docs/gatsby-starters/). If you
have already went through with the
[tutorials](https://www.gatsbyjs.org/tutorial/) install the starter using
`gatsby new` command.

```
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/greglobinski/gatsby-starter-simple-landing.git
```

## Customization

### Metadata

Edit `\src\utils\siteConfig.js`

```
module.exports = {
  pathPrefix: "/",
  appName: "SimpleLanding",
  siteTitle: "SimpleLanding - a landing page GatsbyJs starter",
  siteUrl: "https://gssl.greglobinski.com",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  siteDescription: "SimpleLanding is a dead simple landing page GatsbyJs starter.",
  contactEmail: "hello@example.com",
  ctaLinkUrl: "https://github.com/greglobinski/gatsby-starter-simple-landing",
  // manifest.json
  manifestName: "SimpleLanding - Gatsby starter",
  manifestShortName: "SimplLanding",
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // analytics
  analyticsTrackingId: "UA-110088221-3"
};
```

### Color palette

Edit the `\src\styles\colors.js` file to customize the color palette.

```
module.exports = {
  bg: "#D9D9D9",
  accent: "#709425",
  bright: "#ffffff",
  dark: "#333333",
  gray: "#777777"
};
```

### Style Theme

Edit the `\src\styles\theme.js` file to customize style of elements

```
const theme = createMuiTheme({
  main: {
    colors: {
      background: colors.bg,
      text: colors.dark,
      link: colors.accent,
      linkHover: Color(colors.accent)
        .lighten(0.1)
        .string()
    },
    fonts: {
      unstyled: `"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"`,
      styled: "Open Sans"
    }
  },
  billboard: {
    colors: {
      text: colors.dark,
      textAccent: colors.accent,
      ctaLinkBackground: colors.accent,
      logo: colors.bright
    },
    sizes: {
      logoWidth: "200px",
      logoWidthForM: "300px",
      logoWidthForL: "50%",
      h1Font: 1.8,
      h2Font: 1.2,
      fontIncraseForM: 1.2,
      fontIncraseForL: 1.4
    }
  },
  footer: {
    colors: {
      text: colors.gray,
      link: Color(colors.gray)
        .lighten(0.2)
        .string(),
      linkHover: colors.gray
    },
    sizes: {
      height: "50px"
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  }
});
```

### Content

#### Text

Edit the `md` files in the `/scr/content/` directory to change text on the page.

#### Images

Exchange `/src/images/phone.png`, '/src/images/pnone-perspective.png`and`/src/images/background.jpg`into your own. The responsive variants of the images will generated automaticaly during`gatsby develop`.

#### Icons

Exchange `/src/images/icon.png` and `/src/images/apple-icon.png` into your own. Then run `yarn generate-manifest-icons` command to regenerate icons for android (`manifest.json`) and apple devices.

#### Logo

Edit the `\src\images\logos.js`

```
export default {
  MAIN: {
    viewBox: "...",
    path: (
      <g fillRule="evenodd" clipRule="evenodd" fill="#FFF">
        <path .... />
      </g>
    )
  }
};
```

# Sites built with the starter

* [www.lazywill.com](https://www.lazywill.com/)

pr to add your page

# Updates

If you are interested in updates follow me at
[@greglobinski](https://twitter.com/greglobinski).
