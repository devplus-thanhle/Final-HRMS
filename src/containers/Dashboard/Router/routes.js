import Campaign from "../Campaign/campaign";
import Profile from "../Profile/profile";
import CreateCampaign from "../Campaign/createCampaign";
import React from "react";
import NotFound from "../../404Page";
import DetailProfile from "../Profile/detailProfile";

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
    path: "/profile/:id",
    component: <DetailProfile />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
