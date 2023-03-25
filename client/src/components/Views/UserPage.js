import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Calendar , Button , Checkbox} from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css";
import CharacterPage from "./CharacterPage";
import axios from "axios";
import useApplicationData from "../../hooks/useApplicationData";

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
          console.log(response.data.plan_date);
          response.data.plan_date.forEach((date) => {
            newDates[date] = true;
          });
          console.log("after the ",newDates)
          setDates(newDates);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const onChange = (date,e) => {
    let dates = {};
    const df = date.format("YYYY-MM-DD");
 
    let currentUser = "";
    if (localStorage.getItem("user_id")){
      currentUser = localStorage.getItem("user_id");

    }
    
    const sendData = {
      user:{
       plan_date: df
      },
    };
    

    const sendData2 = { "userid": currentUser, "plan_date" : df} ; 
    console.log("the sendData in user page is ",sendData2)
    // console.log(`checked = ${e.target.checked}`);
    // console.log("everything in e",e.target)
    // console.log("date is here",date);
    
    axios.post(`http://localhost:3000/plans/date/${currentUser}`, sendData2)
    .then((response)=>{console.log("thereponse issss",response.data, sendData2)})
    .catch((err)=>{console.log("response in the onChange catch",err)})
  };


  function dayItem(date) {
    const df = date.format("YYYY-MM-DD");
    const propDates = props.user.plan_date
    console.log("stuffs inside dayItem",props.user.plan_date);
    const status = dates[df] || false;

    return <Checkbox checked={status} onChange={(e)=>onChange(date,e)}/>;
  }

  function monthItem(month) {
    return <DayListItem img="Naruto_newshot.webp"></DayListItem>;
  }

  console.log("current user plan", props.plan);
 
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
    <Calendar dateCellRender={(date)=>dayItem(date)} monthCellRender={(month)=>{monthItem(month)}}/>
    </div>
    </div>
  );
}
