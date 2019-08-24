import { combineReducers } from "redux";
import reminderReducer from "../reducers/reminder_reducer";
import AgeReducer from "../reducers/age_reducer";

const rootReducer = combineReducers({
    AgeReducer,
    reminderReducer
})

export default rootReducer;