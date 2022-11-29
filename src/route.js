import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import BookingDetails from "./pages/BookingDetails.vue";
import Reservation from "./pages/Reservation.vue";
import TermsAndConditions from "./pages/TermsAndConditions.vue";
import Payment from "./pages/Payment.vue";
import ContactUs from "./pages/ContactUs.vue";
import Join from "./pages/Join.vue";
import EditProfile from "./pages/EditProfile.vue";
import PersonalInformation from "./pages/PersonalInformation.vue";
// import ManageProfileEdit from "./pages/ManageProfileEdit.vue";
import ChangePassword from "./pages/ChangePassword.vue";
import Places from "./components/edit-profile/Places.vue";
import EvaluationRecord from "./pages/EvaluationRecord.vue";
import AppointmentRecord from "./pages/AppointmentRecord.vue";
// import CheungChauIsland from "./pages/CheungChauIsland.vue";
// import LantauIsland from "./pages/LantauIsland.vue";
// import LammaIsland from "./pages/LammaIsland.vue";
import HotelRecommendations from "./pages/HotelRecommendations.vue";
// import DayTime from "./pages/DayTime.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import Test from "./pages/Test.vue";
import CheungPdf from "./pages/CheungPdf";
import LantauPdf from "./pages/LantauPdf";
import LammaPdf from "./pages/LammaPdf";

const router = createRouter({
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/search", component: Search, name: "search" },
    { path: "/booking-details/:id", component: BookingDetails },
    {
      path: "/reservation/:id",
      component: Reservation,
      name: "reservation",
      beforeEnter(_, _2, next) {
        if (store.state.authenticatedToReserve) {
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/terms-and-conditions", component: TermsAndConditions },
    { path: "/payment", component: Payment },
    { path: "/contact-us", component: ContactUs },
    { path: "/join", component: Join },
    { path: "/:parentCodexSlug/:name", component: Test },
    // { path: "/cheung-chau-island/:name", component: CheungChauIsland },
    // { path: "/lantau-island/:name", component: LantauIsland },
    // { path: "/lamma-island/:name", component: LammaIsland },
    { path: "/hotel-recommendations", component: HotelRecommendations },
    // { path: "/day-n-night-time/:name", component: DayTime },
    { path: "/privacy-and-policy", component: PrivacyPolicy },
    { path: "/reset-password", component: Home },
    {
      path: "/cheung-chau-island/cheung-chau-island-recommendations.pdf",
      component: CheungPdf,
    },
    {
      path: "/lantau-island/lantau-island-recommendations.pdf",
      component: LantauPdf,
    },
    {
      path: "/lamma-island/lamma-island-recommendations.pdf",
      component: LammaPdf,
    },
    {
      path: "/edit-profile",
      component: EditProfile,
      children: [
        {
          path: "personal-information",
          component: PersonalInformation,
          name: "personal-information",
        },
        // {
        //   path: "manage-profile",
        //   component: ManageProfileEdit,
        //   name: "manage-profile",
        // },
        {
          path: "change-password",
          component: ChangePassword,
          name: "change-password",
        },
        {
          path: "places",
          component: Places,
          name: "places",
        },
        {
          path: "evaluation-record",
          component: EvaluationRecord,
          name: "evaluation-record",
        },
        {
          path: "appointment-record",
          component: AppointmentRecord,
          name: "appointment-record",
        },
      ],
      beforeEnter(to, from, next) {
        if (localStorage.getItem("accessToken")) {
          next();
        } else {
          next("/");
        }
      },
    },
  ],
});

export default router;
