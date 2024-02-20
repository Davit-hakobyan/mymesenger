import { createSlice } from "@reduxjs/toolkit";

const loginMutqSlice = createSlice({
  name: "loginMutq",
  initialState: {
    tvjal: {
      lname: "",
      Fname: "",
    },
  },
  reducers: {
    mutqexacUser: (state, { payload }) => {
    state.tvjal.lname=payload.login
    state.tvjal.Fname=payload.passvord
   
    },
  },
});

export const { mutqexacUser } = loginMutqSlice.actions;
export default loginMutqSlice.reducer;
