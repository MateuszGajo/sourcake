const { I18n } = require("i18n");
const path = require("path");

const i18n = new I18n({
  locales: ["en", "uk"],
  defaultLocale: "en",
  directory: path.join("../", "locales"),
});

module.exports = i18n;
