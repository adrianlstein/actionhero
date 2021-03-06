export const DEFAULT = {
  i18n: config => {
    return {
      // visit https://github.com/mashpie/i18n-node to see all configuration options
      // locale path can be configured from within ./config/api.js
      locales: ["en"],

      // how would you like your languages to fall back if a translation string is missing?
      fallbacks: {
        // 'es': 'en'
      },

      // configure i18n to allow for object-style key lookup
      objectNotation: true,

      // should actionhero append any missing translations to the locale file?
      updateFiles: true,

      // this will configure logging and error messages in the log(s)
      defaultLocale: "en",

      // the name of the method by which to determine the connection's locale
      // by default, every request will be in the 'en' locale
      // this method will be called within the localization middleware on all requests
      // this method should be set on the `i18n` object exported by actionhero.
      determineConnectionLocale: "determineConnectionLocale"
    };
  }
};
