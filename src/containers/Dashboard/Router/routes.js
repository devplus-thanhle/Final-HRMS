import Campaign from "../Campaign/campaign";
import Profile from "../Campaign/profile";
import CreateCampaign from "../Campaign/createCampaign";
import React from "react";
import NotFound from "../../404Page";

export const routes = [
  {
    path: "/campaign",
    component: <Campaign />,
  },
  {
    path: "/campaign/create",
    component: <CreateCampaign />,
  },

  {
    path: "/campaign/:id/profile",
    component: <Profile />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
