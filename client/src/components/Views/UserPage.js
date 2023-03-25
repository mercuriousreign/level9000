import React, { useEffect, useState } from "react";
import { Calendar , Button , Checkbox} from "antd";
import "../Calendar/DayListItem.css";
import CharacterPage from "./CharacterPage";
import axios from "axios";

export default function UserPage(props) {
  const [dates, setDates] = useState({});

  useEffect(() => {
    let currentUser = "";
    if (localStorage.getItem("user_id")) {
      currentUser = localStorage.getItem("user_id");
      axios
        .get(`http://localhost:3000/plans/date/${currentUser}`)
        .then((response) => {
          const newDates = {};
          response.data.plan_date.forEach((date) => {
            newDates[date] = true;
          });
          setDates(newDates);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dates]);

  const onChange = (date,e) => {
    const df = date.format("YYYY-MM-DD");
    let currentUser = "";
    if (localStorage.getItem("user_id")){
      currentUser = localStorage.getItem("user_id");

    }
    const sendData = { "userid": currentUser, "plan_date" : df} ; 
    axios.post(`http://localhost:3000/plans/date/${currentUser}`, sendData)
    .then((response)=>{console.log("thereponse issss",response.data, sendData)})
    .catch((err)=>{console.log("response in the onChange catch",err)})
  };


  function dayItem(date) {
    const df = date.format("YYYY-MM-DD");
    const status = dates[df] || false;

    return <Checkbox checked={status} onChange={(e)=>onChange(date,e)}/>;
  }
  
  return (
    <div>
      <h1 className="headerfont">Planned schedule</h1>
      {props.plan && (
        <CharacterPage
          name={props.plan.name}
          img={props.plan.img}
          description={props.plan.description}
        />
      )}
      {!props.plan && <h1>GO CHOOSE A PLAN!!!!</h1>}
      <div className="calendarborder">
    <Calendar dateCellRender={(date)=>dayItem(date)}/>
    </div>
    </div>
  );
}
