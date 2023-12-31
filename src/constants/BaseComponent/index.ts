import Dashboard from "../../pages/dashboard";
import Report from "../../pages/report";
import Contact from "../../pages/contact";
import CreateContact from "../../pages/contact/create";

// import Profile from "../../pages/user-profile/profile";
// import Settings from "../../pages/user-profile/settings";
import Profile from "../../pages/user-profile/profile";

import Login from "../../pages/auths/login";
import Register from "../../pages/auths/register";

export const BaseComponent = [
  {
    Component: Dashboard,
    path: "/dashboard",
    useAuth: true,
  },
  {
    Component: Report,
    path: "/reports",
    useAuth: true,
  },
  {
    Component: Contact,
    path: "/contacts",
    useAuth: true,
  },
  {
    Component: CreateContact,
    path: "/contacts/create",
    useAuth: true,
  },
  {
    Component: Login,
    path: "/",
    useAuth: false,
  },
  {
    Component: Register,
    path: "/register",
    useAuth: false,
  },
  {
    Component: Profile,
    path: '/profile',
    useAuth: true
  },
  // {
  //   Component: Settings,
  //   path: '/profile/settings',
  //   useAuth: true
  // },
];
