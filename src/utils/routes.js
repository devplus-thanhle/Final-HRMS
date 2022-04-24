import React from "react";
import { Route } from "react-router-dom";

export const listRoute = (list) => {
  return list.map((route, index) => {
    return (
      <Route
        key={index}
        index={route.indexx}
        path={route.path}
        element={route.component}
      />
    );
  });
};
