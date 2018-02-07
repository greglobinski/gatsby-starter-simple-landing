const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      config.plugin("webpack-bundle-analyzer", BundleAnalyzerPlugin);

      break;
  }

  return config;
};
