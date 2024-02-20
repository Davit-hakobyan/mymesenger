import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    lname: "Anna",
    Fname: "Hakobyan",
    mesij: false,
  },
  {
    id: 2,
    lname: "Arpine",
    Fname: "Hakobyan",
    mesij: false,
  },
  {
    id: 3,
    lname: "Gegham",
    Fname: "Hakobyan",
    mesij: false,
  },
  {
    id: 4,
    lname: "Davit",
    Fname: "Hakobyan",
    mesij: false,
  },
  {
    id: 5,
    lname: "Taguhi",
    Fname: "Hakobyan",
    mesij: false,
  },
  {
    id: 6,
    lname: "Taron",
    Fname: "Hakobyan",
    mesij: false,
  },
];

const mesenjerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    poxelvich: (state, { payload }) => {
      state.map((user) => {
        if (user.lname === payload.login && user.Fname === payload.passvord) {
          user.mesij = true;
        }
      });
    },
    idovPoxel: (state, { payload }) => {
      state.map((user) => {
        if (user.lname != payload.name) {
          if (user.id === payload.id) {
            user.mesij = true;
          } else {
            user.mesij = false;
          }
        }
      });
    },
    add:(state,{payload})=>{
      state.push({
        id:Math.random(),
        lname:payload.lname,
        Fname:payload.Fname,
        mesij:false

      })

    }
  },
});

export const { poxelvich, idovPoxel,add } = mesenjerSlice.actions;
export default mesenjerSlice.reducer;
