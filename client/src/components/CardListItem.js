import React, { useState, useEffect } from "react";
import "./CardListItem.css";
import axios from "axios";
import Button from "./Button";
import { Button as ButtonD } from "antd";
// import { Collapse , Card as CardM } from "@mui/material";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { Collapse, Dropdown, Popover } from "antd";

export default function CardListItem(props) {
  const {
    planList,
    addLikes,
    user,
    setUser,
    id,
    name,
    img,
    exercise,
    onSelect,
    isSelected,
  } = props;

  // console.log("exercise props here", exercise);
  const [counter, setCounter] = useState(0);
  const exerciseList = exercise.map((e, index) => (
    <li key={index}>{e.name}</li>
  ));

  function change() {
    axios.post(`http://localhost:3000/plans/likes/${id}`).then((response) => {
      setCounter(counter + 1);
      props.setCount(props.count + 1);
      console.log("this is llkjlkjlkjlj", id);
      addLikes(id);
      console.log("this is the planList", planList);
    });

    console.log("change here");
  }

  return (
    <div>
      <h2 className="">{name}</h2>
      {planList[id - 1] && <h2 className="">{planList[id - 1].likes}</h2>}

      <Collapse>
        <CollapsePanel header="Exercises">
          <Button
            user={user}
            setUser={setUser}
            id={id}
            plan={name}
            selected={isSelected}
            onSelect={onSelect}
          />
          <ButtonD onClick={change}>Like Counter</ButtonD>
          <div className="list">
            <ol>{exerciseList}</ol>
          </div>
        </CollapsePanel>
      </Collapse>
    </div>
  );
}
