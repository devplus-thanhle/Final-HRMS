import { combineReducers } from "redux";
import campaigns from "./campaignReducer";
import profiles from "./profileReducer";
import alert from "./alertReducer";
import loading from "./loadingReducer";

export default combineReducers({
  campaigns,
  profiles,
  alert,
  loading,
});
