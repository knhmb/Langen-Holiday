import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";

import BaseContainer from "./ui/BaseContainer.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
  ],
});

app.component("base-container", BaseContainer);

app.use(ElementPlus);
app.use(router);

app.mount("#app");
