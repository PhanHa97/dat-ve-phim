import { combineReducers } from "redux";
import datVePhimReducer from "./datVePhimReducer";

const rootReducer = combineReducers({
    // Tập hợp những reducer con ở đây
    datVePhimReducer,
});
export default rootReducer;