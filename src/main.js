import { createApp } from "vue";
import App from "./App.vue";
import router from "./route.js";
import store from "./store/store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { SetupCalendar } from "v-calendar";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseCard from "./ui/BaseCard.vue";

import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";

import vueI18n from "./i18n.js";

import moment from "moment";

import VuePdf from "vue3-pdfjs";

const app = createApp(App);

app.config.globalProperties.$filters = {
  formatTime(value) {
    return moment(value, "HH").format("HH:mm");
  },
};

app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);

library.add(faTrashAlt, faEdit);

app.use(ElementPlus);
// app.use(SetupCalendar, {});
app.use(VCalendar);

app.use(vueI18n);
app.use(VuePdf);

app.use(router);
app.use(store);

app.mount("#app");
