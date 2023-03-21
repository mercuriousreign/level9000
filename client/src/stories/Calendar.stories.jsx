import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Calendar from "../components/Calendar/Calendar";
import DayListItem from "../components/Calendar/DayListItem";
import ButtonCalendar from "../components/Calendar/ButtonCalendar";
import ProgressBar from "../components/Calendar/Progressbar";
import Navbar from "../components/navbar";
import UserPage from "../components/Views/UserPage";

// export default {
//   title:'Progressbar',
//   argTypes : {
//     options: ['something'],
//     control: {type:'text'}
//   }
// }

let dayDate = new Date();
let dateString = dayDate.toDateString()
let dayObj = [
  {id:0, date: dateString, img:"/logo192.png"},
  {id:1, date: dateString, img:"/logo192.png"},
  {id:2, date: dateString, img:"/logo192.png"},
  {id:3, date: dateString, img:"/logo192.png"},
  {id:4, date: dateString, img:"/logo192.png"},
  {id:5, date: dateString, img:"/logo192.png"},
  {id:6, date: dateString, img:"/logo192.png"},
  {id:7, date: dateString, img:"/logo192.png"},
  {id:8, date: dateString, img:"/logo192.png"},
  {id:10, date: dateString, img:"/logo192.png"},
  {id:11, date: dateString, img:"/logo192.png"},
  {id:12, date: dateString, img:"/logo192.png"},
  {id:13, date: dateString, img:"/logo192.png"},
  {id:14, date: dateString, img:"/logo192.png"},
  {id:15, date: dateString, img:"/logo192.png"},
  {id:16, date: dateString, img:"/logo192.png"},
  {id:17, date: dateString, img:"/logo192.png"},
  {id:18, date: dateString, img:"/logo192.png"},
  {id:19, date: dateString, img:"/logo192.png"},
  {id:20, date: dateString, img:"/logo192.png"},
  {id:21, date: dateString, img:"/logo192.png"},
  {id:22, date: dateString, img:"/logo192.png"},
  {id:23, date: dateString, img:"/logo192.png"},
  {id:24, date: dateString, img:"/logo192.png"},
  {id:25, date: dateString, img:"/logo192.png"},
  {id:26, date: dateString, img:"/logo192.png"},
  {id:27, date: dateString, img:"/logo192.png"},
  {id:28, date: dateString, img:"/logo192.png"},
  {id:29, date: dateString, img:"/logo192.png"},]


storiesOf("ButtonCalendar", module)
  .add("Base",()=> <ButtonCalendar onClick={action("SetState")} disabled={false} children={""}/>)

  storiesOf("ButtonCalendar", module)
  .add("Confirm",()=> <ButtonCalendar onClick={action("SetState")} disabled={false} children={"Confirm"} confirm={true}/>)

  storiesOf("ButtonCalendar", module)
  .add("Delete",()=> <ButtonCalendar onClick={action("SetState")} disabled={false} children={"Delete"} confirm={false} danger={true}/>)

storiesOf("ProgressBar",module)
.add("Base",()=><ProgressBar bgcolor={"#6a1b9a"} completed={68}/>)

storiesOf("DayListItem",module)
.add("Base",()=> <DayListItem date={dayObj[0].date} img="/logo192.png"/>)
  
storiesOf("Calendar", module)
.add("Base",() => <Calendar days={dayObj} month="January"></Calendar>)

storiesOf("Navbar",module)
.add("Base",()=><Navbar/>)

storiesOf("Userpage",module)
.add("Base",()=><UserPage month="January" days={dayObj}/>)