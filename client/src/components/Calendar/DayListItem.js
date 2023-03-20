import React from "react";
import "./DayListItem.css";


export default function DayListItem(props) {
  const {date, plan , planimg , img, progress} = props
  return (
    <div className="day">
      <h2 className="">{date}</h2>
      <h2 className="">{plan}</h2>
      <img className="" src={img}/>
    </div>

  )
}