import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/Home" /* webpackChunkName: "HomePage"*/)
    ),
  },

  {
    path: "/movies",
    name: "Movies",
    exact: true,
    component: lazy(() =>
      import("../views/Movies" /* webpackChunkName: "AboutPage"*/)
    ),
  }

];

export default mainRoutes;
