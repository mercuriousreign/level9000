import { useState } from "react";
import CompletedButton from "./CompletedButton";
import axios from "axios";

export default function Button(props) {

  const { user, setUser, id, plan, onSelect, onReset, selected } = props;
 
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  

  function handleClick(planID) {
    console.log("user plan_id inside button", user.plan_id)
    const tester = {
      "user": {
    "plan_id": planID
      }
    }
    let currentuser = "";
    axios.get(`http://localhost:3000/users`).then((response) => {
      const userList = response.data.users;
      const currentUserEmail = user.email;
      currentuser = userList.find(user => user.email === currentUserEmail)
      console.log("currentuser id inside button", currentuser);
      setUser({...user, id: currentuser.id});
      
    }).then(()=>{axios
      .put(`http://localhost:3000/users/${currentuser.id}`, tester )
      .then((response) => {
        if (response.data) {
          
          console.log("success",response.data);
        } else {
          console.log("err",response.data);
        }
      })
      .catch((error) => console.log("api errors:", error));
      onSelect();
    })
    
    
  }
  

  return (
    <div>
      <button onClick={() => { handleClick(id) }} disabled={selected ? true : false}>
      {selected ? "Plan Selected" : "Select Plan"}
    </button>
          {selected && <CompletedButton onReset={onReset} />}
    </div>
  );
}




