import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.LOADING:
      return {
        loading: {},
      };
    default:
      return state;
  }
};
export default loadingReducer;
