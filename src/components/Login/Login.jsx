import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mutqexacUser } from "../../app/logintvjalSlicemy";
import { poxelvich, add } from "../../app/counterSlicemy";
import "./Login.css";

const Login = ({ login, setLogin }) => {
  const [grancvel, setGrancvel] = useState(true);
  const [grancmanTvjal, setGrancmanTvjal] = useState({
    lname: "",
    Fname: "",
    
  });
  const [stugoxPas, setStugoxPas] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const logintvjalner = useSelector((state) => state.loginMutq);

  const [mutqtvjal, setMutqtvjal] = useState({
    login: "Anna",
    passvord: "Hakobyan",
  });
  function loginMutq(e) {
    e.preventDefault();
    const stugum = users.find(
      (user) =>
        user.lname === mutqtvjal.login && user.Fname === mutqtvjal.passvord
    );

    if (stugum) {
      dispatch(mutqexacUser(mutqtvjal));
      dispatch(poxelvich(mutqtvjal));
      setLogin(true);
    } else {
      alert("sxal gaxtnabar");
    }
  }
  function stugelGrancvel() {
    if (grancmanTvjal.Fname === stugoxPas && stugoxPas.length>1) {
      dispatch(add({ lname: grancmanTvjal.lname, Fname: grancmanTvjal.Fname }));
      alert("you have successfully registered");
      setGrancmanTvjal({
        ...grancmanTvjal,
        Fname: "",
      });
      setStugoxPas("");
      setGrancvel(true);
    } else {
      setGrancmanTvjal({
        ...grancmanTvjal,
        Fname: "",
      });
      setStugoxPas("");
      alert("enter the same password");
    }
  }
  return (
    <div className="form_div">
      {grancvel ? (
        <form className="form" onSubmit={loginMutq}>
          <input
            type="text"
            value={mutqtvjal.login}
            onChange={(e) =>
              setMutqtvjal({
                ...mutqtvjal,
                login: e.target.value,
              })
            }
            placeholder="login"
          />
          <br />
          <input
            type="text"
            value={mutqtvjal.passvord}
            onChange={(e) =>
              setMutqtvjal({
                ...mutqtvjal,
                passvord: e.target.value,
              })
            }
            placeholder="password"
          />
          <br />
          <button>come in</button>
          <br />
          <br />
          <i onClick={() => setGrancvel(!grancvel)}>create a new account</i>
        </form>
      ) : (
        <div className="form">
          <input
            type="text"
            value={grancmanTvjal.lname}
            onChange={(e) =>
              setGrancmanTvjal({
                ...grancmanTvjal,
                lname: e.target.value,
              })
            }
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            value={grancmanTvjal.Fname}
            onChange={(e) =>
              setGrancmanTvjal({
                ...grancmanTvjal,
                Fname: e.target.value,
              })
            }
            placeholder="password"
          />
          <br />
          <input
            type="text"
            value={stugoxPas}
            onChange={(e) => setStugoxPas(e.target.value)}
            placeholder="Repeat password"
          />
          <br />
          <button onClick={stugelGrancvel}>save</button>
        </div>
      )}
    </div>
  );
};

export default Login;
