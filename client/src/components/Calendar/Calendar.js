import React from "react"
import DayListItem from "./DayListItem"

export default function Calendar(props) {
  const plans = props.days.map((day)=>{
    return (
    <DayListItem 
    key = {day.id}
    date = {day.date}
    img = {props.img}
    ></DayListItem>)
  })

  return (
  <div className="calendar">
    <h1>{props.month}</h1>
    {plans}
    </div>)
}