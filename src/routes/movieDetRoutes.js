import { lazy } from "react";

const movieDetRoutes = [
  {
    path: "/movies/:movieId",
    name: "MovieDetails",
    exact: false,
    component: lazy(() =>
      import("../views/MovieDetails" /* webpackChunkName: "MovieDetails"*/)
    ),
  }

];

export default movieDetRoutes;