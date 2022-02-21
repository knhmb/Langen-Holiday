import en from "./i18n/en.json";
import zh from "./i18n/zh.json";
import { createI18n } from "vue-i18n";

const vueI18n = createI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: {
    en: en,
    zh: zh,
  },
});

export default vueI18n;
