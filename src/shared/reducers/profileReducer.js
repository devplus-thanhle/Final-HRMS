import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
  profiles: [],
  profile: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.GET_PROFILES:
      return {
        profiles: action.payload,
      };
    case PROFILE_TYPES.GET_PROFILE:
      return {
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
