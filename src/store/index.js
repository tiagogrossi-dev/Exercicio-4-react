import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlist } from "../reducers/playlist";

export const store = configureStore({
    reducer: combineReducers({ playlist })
});