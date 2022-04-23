import { getDataAPI, postDataAPI } from "../../service/BaseApi";
import { GLOBALTYPES } from "./globalTypes";

export const CAMPAIGN_TYPES = {
  GET_CAMPAIGN: "GET_CAMPAIGN",
};

export const getCampaign = () => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.LOADING, payload: true });
    const res = await getDataAPI("get-all-campaign");
    dispatch({
      type: CAMPAIGN_TYPES.GET_CAMPAIGN,
      payload: res.data.result.campaigns,
    });
    dispatch({ type: GLOBALTYPES.LOADING, payload: false });
  } catch (error) {
    console.log(error);
  }
};
// axios
//       .post("http://localhost:5000/api/create-campaign", data)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));

export const createCampaign = (data) => async (dispatch) => {
  try {
    const res = await postDataAPI("create-campaign", data);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.msg },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
