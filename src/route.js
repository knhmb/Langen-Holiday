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
import PersonalInformation from "./pages/PersonalInformation.vue";
// import ManageProfileEdit from "./pages/ManageProfileEdit.vue";
import ChangePassword from "./pages/ChangePassword.vue";
import Places from "./components/edit-profile/Places.vue";
import EvaluationRecord from "./pages/EvaluationRecord.vue";
import AppointmentRecord from "./pages/AppointmentRecord.vue";
import CheungChauIsland from "./pages/CheungChauIsland.vue";
import LantauIsland from "./pages/LantauIsland.vue";
import LammaIsland from "./pages/LammaIsland.vue";
import HotelRecommendations from "./pages/HotelRecommendations.vue";
import DayTime from "./pages/DayTime.vue";

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
    { path: "/cheung-chau-island", component: CheungChauIsland },
    { path: "/lantau-island", component: LantauIsland },
    { path: "/lamma-island", component: LammaIsland },
    { path: "/hotel-recommendations", component: HotelRecommendations },
    { path: "/day-time", component: DayTime },
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
    },
  ],
});

export default router;
