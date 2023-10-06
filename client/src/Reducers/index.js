import {combineReducers} from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import channelReducers from "./channel";
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./history";
import commentReducer from "./comments";
import subReducer from "./subscribe";
import accessReducer from "./access";

export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer,
    subReducer,
    accessReducer
});