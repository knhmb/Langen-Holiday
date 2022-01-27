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

import { SetupCalendar } from "v-calendar";

import BaseContainer from "./ui/BaseContainer.vue";
import BaseCard from "./ui/BaseCard.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);

library.add(faTrashAlt, faEdit);

app.use(ElementPlus);
app.use(SetupCalendar, {});

app.use(router);
app.use(store);

app.mount("#app");
