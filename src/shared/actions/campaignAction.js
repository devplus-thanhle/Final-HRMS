import { getDataAPI, postDataAPI } from "../../service/BaseApi";
import { GLOBALTYPES } from "./globalTypes";

export const CAMPAIGN_TYPES = {
  GET_CAMPAIGN: "GET_CAMPAIGN",
  LOADING_CAMPAIGN: "LOADING_CAMPAIGN",
};

export const getCampaign = (page) => async (dispatch) => {
  try {
    dispatch({ type: CAMPAIGN_TYPES.LOADING_CAMPAIGN, payload: true });
    const res = await getDataAPI(`get-all-campaign?page=${page}`);
    dispatch({
      type: CAMPAIGN_TYPES.GET_CAMPAIGN,
      payload: {
        data: res.data.result.campaigns,
        count: res.data.result.count,
      },
    });
    dispatch({ type: CAMPAIGN_TYPES.LOADING_CAMPAIGN, payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const createCampaign = (data) => async (dispatch) => {
  try {
    const res = await postDataAPI("create-campaign", data);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.msg },
    });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};
