import React, { useState } from "react";
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


  //const [boxCheck,setChecks] = useState(false);
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const fakeDB = {};

  function deleteItem() {
    console.log("delete");
  }

  function addItem() {
    console.log("add");
  }

  const onChange = (date,e) => {
    const df = date.format("YYYY-MM-DD");
    console.log("the df in user page is ",df)
    
    const sendData = {
      user:{
       plan_date: df
      },
    };
    console.log("the sendData in user page is ",sendData)


    const sendData2 = {
      "user" : {
      "plan_date" : "2023-03-24"
      }
    } 
    
    console.log(`checked = ${e.target.checked}`);
    console.log("everything in e",e.target)
    console.log("date is here",date);
    //localStorage.setItem(date.format("YYYY-MM-DD"),e.target.checked);

    axios.post(`http://localhost:3000/useru`, sendData2)
    .then((response) => {console.log("response in the onChange",response)}).catch((err)=>{console.log("response in the onChange catch",err)})
  };

  // function saveDate(date) {
  //   localStorage.setItem(date,)
  // }

 
  

  function dayItem(date) {
    let status = false;
    // if(localStorage.getItem(date.format("YYYY-MM-DD"))){
    //   status = true;
    // }
    // if (user.plan_date.includes(date.format("YYYY-MM-DD"))){
    //   status = true;
    // }
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
    <Calendar onPanelChange={onPanelChange} dateCellRender={(date)=>dayItem(date)} monthCellRender={(month)=>{monthItem(month)}}/>
    </div>
    </div>
  );
}
