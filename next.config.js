const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: config => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      `src/components`
    );
    return config;
  }
});
