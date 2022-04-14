import React from "react";
import { Route } from "react-router-dom";

export const listRoute = (list) => {
  return list.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  });
};
