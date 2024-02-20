import React, { useState } from "react";
import "./App.css";
import { Add } from "../src/app/counterSlicemy";

import { useDispatch, useSelector } from "react-redux";
import Component from "./components/component1/Component";
import Login from "./components/Login/Login";
import Heder from "./components/heder/Heder";

function App() {
  const s = useSelector((state) => state.users);
  const [login, setLogin] = useState(false);
  // localStorage.clear();

  return (
    <div className="App">
      <Heder />
      {login ? (
        <Component setLogin={setLogin} login={login} />
      ) : (
        <Login login={login} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
