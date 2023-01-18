import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/AppStack/Home.vue";
import SignUp from "../views/AuthStack/SignUp.vue";
import LogIn from "../views/AuthStack/LogIn.vue";
import AddDetails from "../views/AppStack/AddDetails.vue";
import UpdateDetails from "../views/AppStack/UpdateDetails.vue";
import deleteDetails from "../views/AppStack/deleteDetails.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/log-in",
  },
  {
    name: "AddDetails",
    component: AddDetails,
    path: "/add-Details",
  },
  {
    name: "UpdateDetails",
    component: UpdateDetails,
    path: "/update/:id",
  },
  {
    name: "deleteDetails",
    component: deleteDetails,
    path: "/delete/:id",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
