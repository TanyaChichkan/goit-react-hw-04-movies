import { lazy } from "react";

const additionalRoutes = [
  {
    path: "/movies/:movieId/cast",
    name: "Cast",
    exact: true,
    component: lazy(() =>
      import("../views/Cast" /* webpackChunkName: "cast"*/)
    ),
  },

  {
    path: "/movies/:movieId/reviews",
    name: "Reviews",
    exact: true,
    component: lazy(() =>
      import("../views/Reviews" /* webpackChunkName: "reviews"*/)
    ),
  }

];

export default additionalRoutes;