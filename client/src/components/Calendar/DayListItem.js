import React from "react";
import "./DayListItem.css";


export default function DayListItem(props) {
  const {date, plan , planimg , img, progress} = props
  return (
    <div className="day">
      <h2 className="datefont">{date}</h2>
      <img className="imgicon" src={img}/>
      <h2 className="">{plan}</h2>
    </div>

  )
}