import { createSlice } from "@reduxjs/toolkit";
const baza = {};

const mesijbaza = createSlice({
  name: "baza",
  initialState: {
    baza,
  },
  reducers: {
    avelacnelBaz: (state, { payload }) => {
      let id = payload.id;
      let texte = payload.text;
      if (!localStorage.getItem("baza")) {
        if (!state.baza.hasOwnProperty(id)) {
          state.baza[id] = [];
          state.baza[id].push(texte);
        } else {
          state.baza[id].push(texte);
        }
        localStorage.setItem("baza", JSON.stringify(state.baza));
      } else {
        state.baza = JSON.parse(localStorage.getItem("baza"));
        if (!state.baza.hasOwnProperty(id)) {
          state.baza[id] = [];
          state.baza[id].push(texte);
        } else {
          state.baza[id].push(texte);
        }
        localStorage.setItem("baza", JSON.stringify(state.baza));
      }
    },
    messigdelet: (state, { payload }) => {
      const id = payload.userID;
      const text = payload.text;
      for (let i = 0; i < state.baza[id].length; i++) {
        if (state.baza[id][i].uxarkelmessig === text) {
          state.baza[id].splice(i, 1);
        }
      }
      localStorage.setItem("baza", JSON.stringify(state.baza));
    },
    poxelmessij: (state, { payload }) => {
      const id = payload.userID;
      const hintext = payload.text.hintext;
      const tazatext = payload.text.poxvactext;
      for (let i = 0; i < state.baza[id].length; i++) {
        if (state.baza[id][i].indifikator=== hintext) {
          state.baza[id][i].uxarkelmessig = tazatext;
        }
      }
      localStorage.setItem("baza", JSON.stringify(state.baza));
    },
  },
});

export const { avelacnelBaz, messigdelet, poxelmessij } = mesijbaza.actions;
export default mesijbaza.reducer;
