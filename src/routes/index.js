import React from "react";

export const routes = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("../containers/HomePage/index")),
  },
  {
    path: "/list-user",
    component: React.lazy(() => import("../containers/InterviewPage/index")),
  },
];
