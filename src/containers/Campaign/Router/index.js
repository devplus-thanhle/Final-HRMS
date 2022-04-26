import React from "react";
import {router} from "./router";
import { Route, Routes } from "react-router-dom";
const RootRouter = () => {
    return (
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    );
  };
  
  export default RootRouter;