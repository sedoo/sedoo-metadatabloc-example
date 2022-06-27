import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import Vuex from "vuex";

import myProjectFakeBlockModule from "../../src/lib/modules/myproject-fake-block/store/myProjectFakeBlockStore.js";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
}) => {
  function loadLocaleMessages() {
    const locales = require.context(
      "./locales",
      true,
      /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        messages[locale] = locales(key);
      }
    });
    return messages;
  }
  Vue.use(Vuetify);
  Vue.use(Vuex);
  Vue.use(VueI18n);
  Vue.use(VueAxios, axios);
  options.i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: loadLocaleMessages(),
  });
  options.vuetify = new Vuetify({});
  options.store = new Vuex.Store({
    namespaced: true,
    modules: {
      myProjectFakeBlockModule
    },
  });
};