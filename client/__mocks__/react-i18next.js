module.exports = {
  useTranslation: () => ({
    t: (key) => `localized:${key}`,
  }),
};
