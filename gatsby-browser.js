// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
exports.onInitialClientRender = function() {
  // eslint-disable-next-line no-undef
  var ssStyles = window.document.getElementById("server-side-jss");
  ssStyles && ssStyles.parentNode.removeChild(ssStyles);
};
