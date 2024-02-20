import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Anvanakansms.css";
import { avelacnelBaz, messigdelet, poxelmessij } from "../../app/mesijBazajic";
import Perepiska from "../perepiska/Perepiska";

const Anvanakansms = ({ userid, usermutq, nkarelmes }) => {
  const dispatch = useDispatch();
  const [poxelmesij, setPoxelmesij] = useState(false);
  const [poxvactext, setPxvactext] = useState("");
  const [hintext, sethintext] = useState("");
  const [uxarkelmessig, setUxarkelmessig] = useState("");
  const [userID, setUserID] = useState("");
  const users = useSelector((state) => state.users);
  const usermesij = users.find((user) => user.id === userid);
  const baza = useSelector((state) => state.baza.baza);
  // console.log(baza)

  const useractiv = users
    .filter((user) => user.mesij === true)
    .sort((a, b) => a.id > b.id);
  useEffect(() => {
    if (useractiv.length > 1) {
      let k = "" + useractiv[0].id + useractiv[1].id;
      setUserID(k);
    }
  }, [useractiv]);

  function avelecnelmesij() {
    if (uxarkelmessig.length < 1) {
      return;
    }
    const usermutqid = users.find((user) => user.lname === usermutq).id;
    dispatch(
      avelacnelBaz({
        id: userID,
        text: {
          usermutqid: usermutqid,
          uxarkelmessig: uxarkelmessig,
          indifikator: new Date().toISOString(),
        },
      })
    );

    setUxarkelmessig("");
  }
  function dilet(text) {
    dispatch(messigdelet({ userID, text }));
  }
  function poxelubaton(indifikator, text) {
    setPxvactext(text);
    console.log(indifikator);
    setPoxelmesij(!poxelmesij);
    sethintext(indifikator);
   
  }
  function poxelBazajumSMS() {
    if (poxvactext.length < 1) {
      return;
    }

    setPoxelmesij(!poxelmesij);
    dispatch(poxelmessij({ userID, text: { hintext, poxvactext } }));
    setPxvactext("");
  }
  function cancel() {
    setPoxelmesij(!poxelmesij);
    setPxvactext("");
  }
  return (
    <div className="Anvan">
      <div className="stacox">
        {usermesij ? (
          <h4>
            messig for {usermesij.lname}
            {usermesij.Fname}
          </h4>
        ) : (
          <h4>who do you want to write a message to?</h4>
        )}
      </div>
      <div className="perepiska">
        <Perepiska
          sms={baza[userID]}
          nkarelmes={nkarelmes}
          dilet={dilet}
          poxelubaton={poxelubaton}
        />
      </div>
      <div className="input_div">
        {userID ? (
          <div style={{ width: "100%" }}>
            {poxelmesij ? (
              <div className="input_div" style={{ backgroundColor: "red" }}>
                <input
                  value={poxvactext}
                  onChange={(e) => setPxvactext(e.target.value)}
                  type="text"
                  className="input"
                />
                <button
                  className="inputbut"
                  style={{ backgroundColor: "greenyellow" }}
                  onClick={poxelBazajumSMS}
                >
                  change message
                </button>
                <button
                  className="inputbut"
                  style={{ backgroundColor: "chartreuse" }}
                  onClick={cancel}
                >
                  cancel
                </button>
              </div>
            ) : (
              <div className="input_div">
                <input
                  value={uxarkelmessig}
                  onChange={(e) => setUxarkelmessig(e.target.value)}
                  type="text"
                  className="input"
                />
                <button className="inputbut" onClick={avelecnelmesij}>
                  send a message
                </button>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Anvanakansms;
