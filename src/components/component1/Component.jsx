import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idovPoxel } from "../../app/counterSlicemy";

import "./Component.css";
import Anvanakansms from "../anvanakansms/Anvanakansms";

const Component = ({setLogin,login}) => {
  const [userid, setUserid] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const usermutq = useSelector((state) => state.loginMutq.tvjal);
  const users1 = users.filter((user) => user.lname != usermutq.lname);

  function nkarelmes(id) {
    setUserid(id);
    dispatch(idovPoxel({ id, name: usermutq.lname }));
  }

  return (
    <div  >
      <div  className="Anvan">
      <h3   >
        {usermutq.lname}
        {usermutq.Fname}
       
      </h3>

      <button  className="DuGalBut"  onClick={()=>setLogin(!login)} >Eqit</button>
      <br /><br />
      </div>
      
      <div className="glxav">
        <div className="glxav_1">
          {users1.map((user) => {
            return (
              <p id={user.id} key={user.id} onClick={() => nkarelmes(user.id)}>
                <b>
                  {user.lname}
                  {user.Fname}
                </b>
              </p>
            );
          })}
        </div>

        <div className="glxav_2">
          <Anvanakansms userid={userid}  usermutq={usermutq.lname}  nkarelmes={nkarelmes}/>
        </div>
      </div>
    </div>
  );
};

export default Component;
