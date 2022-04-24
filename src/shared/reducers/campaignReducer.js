import { CAMPAIGN_TYPES } from "../actions/campaignAction";

const initialState = {
  campaigns: [],
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMPAIGN_TYPES.GET_CAMPAIGN:
      console.log(action.payload);
      return {
        campaigns: action.payload,
      };

    default:
      return state;
  }
};

export default campaignReducer;
