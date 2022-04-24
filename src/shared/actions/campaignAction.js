import { getDataAPI } from "../../service/BaseApi";

export const CAMPAIGN_TYPES = {
  GET_CAMPAIGN: "GET_CAMPAIGN",
};

export const getCampaign = () => async (dispatch) => {
  try {
    const res = await getDataAPI("get-all-campaign");
    console.log(res);
    dispatch({
      type: CAMPAIGN_TYPES.GET_CAMPAIGN,
      payload: res.data.result.campaigns,
    });
  } catch (error) {
    console.log(error);
  }
};
