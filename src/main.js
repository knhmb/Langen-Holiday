import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import { SetupCalendar } from "v-calendar";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import BookingDetails from "./pages/BookingDetails.vue";
import Reservation from "./pages/Reservation.vue";
import TermsAndConditions from "./pages/TermsAndConditions.vue";
import Payment from "./pages/Payment.vue";
import ContactUs from "./pages/ContactUs.vue";
import Join from "./pages/Join.vue";

import BaseContainer from "./ui/BaseContainer.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search },
    { path: "/booking-details", component: BookingDetails },
    { path: "/reservation", component: Reservation },
    { path: "/terms-and-conditions", component: TermsAndConditions },
    { path: "/payment", component: Payment },
    { path: "/contact-us", component: ContactUs },
    { path: "/join", component: Join },
  ],
});

app.component("base-container", BaseContainer);

app.use(ElementPlus);
app.use(SetupCalendar, {});
app.use(router);

app.mount("#app");
