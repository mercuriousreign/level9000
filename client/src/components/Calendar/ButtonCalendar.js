import React from "react";
import classNames from "classnames";

import "./ButtonCalendar.css";

export default function ButtonCalendar(props) {
   let buttonClass = classNames('buttoncalendar', { 'buttoncalendar--confirm': props.confirm, 'buttoncalendar--danger': props.danger , 'buttoncalendar--default': props.default });

   return (<button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>);
}