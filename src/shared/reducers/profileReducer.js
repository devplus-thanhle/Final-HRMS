import { PROFILE_TYPES } from "../actions/profileAction";
import { EditData } from "../actions/globalTypes";

const initialState = {
  profiles: [],
  profile: {},
  profileByCampaign: [],
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_PROFILES:
      return {
        ...state,
        profiles: action.payload.data,
        count: action.payload.count,
      };
    case PROFILE_TYPES.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case PROFILE_TYPES.GET_PROFILE_CAMPAIGN:
      return {
        ...state,
        title: action.payload.title,
        profiles: action.payload.profiles,
      };
    case PROFILE_TYPES.UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles
          ? EditData(state.profiles, action.payload._id, action.payload)
          : [],
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
