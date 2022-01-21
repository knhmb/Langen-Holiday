import { createApp } from "vue";
import App from "./App.vue";
import router from "./route.js";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import { SetupCalendar } from "v-calendar";

import BaseContainer from "./ui/BaseContainer.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);

app.use(ElementPlus);
app.use(SetupCalendar, {});
app.use(router);

app.mount("#app");
