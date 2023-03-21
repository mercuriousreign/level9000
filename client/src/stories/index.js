import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Calendar from "../components/Calendar/Calendar";
import DayListItem from "../components/Calendar/DayListItem";

dayDate = new Date();
let dayObj = {id:0,date: dayDate,img:"https://styles.redditmedia.com/t5_2qnlf/styles/communityIcon_bckbrah432281.jpg?width=256&format=pjpg&v=enabled&s=33afddac9c7daedededc3da36b9662aee006eb45"}

storiesOf("Calendar", module)
.addParameters({
  backgrounds : [{name: "dark", value : "#222f3e", default: true}]
})
.add("Base",() => <Calendar day={dayObj}></Calendar>)