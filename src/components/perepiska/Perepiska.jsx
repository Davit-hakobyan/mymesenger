import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./perepiska.css";

const Perepiska = ({ sms, nkarelmes, dilet,  poxelubaton}) => {
  const users = useSelector((state) => state.users);

  const mutqanoxID = useSelector((state) => state.loginMutq.tvjal);
  const IDcss = users.find((user) => user.lname === mutqanoxID.lname).id;

console.log(sms)
  return (
    <div className="div555">
      {sms
        ? sms.map((s) => (
            <div
              className={s.usermutqid == IDcss ? "grin" : "red"}
              key={Math.random()}
            >
              <b>{s.uxarkelmessig}</b>
              {s.usermutqid === IDcss ? (
                <div>
                  <button
                    onClick={() => dilet(s.uxarkelmessig)}
                    className="messDilet"
                  >
                    x
                  </button>
                  <button className="textpoxel" onClick={()=> poxelubaton(s.indifikator,s.uxarkelmessig)}>R</button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))
        : ""}
    </div>
  );
};

export default Perepiska;
