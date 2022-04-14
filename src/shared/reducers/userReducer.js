import { USSER_TYPES } from "../actions/userAction";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USSER_TYPES.GET_USER:
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
