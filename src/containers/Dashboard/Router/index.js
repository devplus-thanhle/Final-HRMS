import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const RootRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default RootRouter;
