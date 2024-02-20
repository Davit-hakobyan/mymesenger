import { configureStore } from "@reduxjs/toolkit";
import mesenjerReducer from "./counterSlicemy";
import loginMutqSlice from "./logintvjalSlicemy";
import mesijbaza from "./mesijBazajic";

export const store = configureStore({
  reducer: {
    users: mesenjerReducer,
    loginMutq: loginMutqSlice,
    baza: mesijbaza,
  },
});
