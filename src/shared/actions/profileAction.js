import { getDataAPI } from "../../service/BaseApi";

export const PROFILE_TYPES = {
  GET_PROFILES: "GET_PROFILES",
  GET_PROFILE: "GET_PROFILE",
};

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await getDataAPI("all-profiles");
    dispatch({
      type: PROFILE_TYPES.GET_PROFILES,
      payload: res.data.result.profiles,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await getDataAPI(`get-profile/${id}`);
    console.log(res);
    dispatch({
      type: PROFILE_TYPES.GET_PROFILE,
      payload: res.data.result,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const changeStatus = (status,id) => async (dispatch) => {
//   try {
//     const res = await
//   } catch (error) {

//   }
// }
