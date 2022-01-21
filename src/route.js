import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import BookingDetails from "./pages/BookingDetails.vue";
import Reservation from "./pages/Reservation.vue";
import TermsAndConditions from "./pages/TermsAndConditions.vue";
import Payment from "./pages/Payment.vue";
import ContactUs from "./pages/ContactUs.vue";
import Join from "./pages/Join.vue";
import EditProfile from "./pages/EditProfile.vue";

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
    { path: "/edit-profile", component: EditProfile },
  ],
});

export default router;
