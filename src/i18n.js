import en from "./i18n/en.json";
import { createI18n } from "vue-i18n";

// Vue.use(VueI18n);

const vueI18n = createI18n({
  messages: {
    en: en,
  },
});

export default vueI18n;
