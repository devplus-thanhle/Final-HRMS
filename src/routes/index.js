import React from "react";
import Home from "../containers/HomePage/index";
import Dashboard from "../containers/Dashboard/index";
import NotFound from "../containers/404Page/index";
export const routes = [
  {
    indexx: true,
    component: <Home />,
  },
  {
    path: "/dashboard/*",
    component: <Dashboard />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
