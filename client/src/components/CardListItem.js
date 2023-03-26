import React, { useState, useEffect } from "react";
import "./CardListItem.css";
import axios from "axios";
import Button from "./Button";
import { Button as ButtonD } from "antd";
// import { Collapse , Card as CardM } from "@mui/material";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { Collapse, Dropdown, Popover } from "antd";

export default function CardListItem(props) {
  const { user, setUser, id, name, img, exercise, onSelect, isSelected } =
    props;

  const [counter, setCounter] = useState();
  let counter2 = 0;

  // console.log("exercise props here", exercise);

  const exerciseList = exercise.map((e, index) => (
    <li key={index}>{e.name}</li>
  ));

  function fetchCounter() {
    axios.get(`http://localhost:3000/plans/${id}`).then((response) => {
      console.log("fetch data for likes", response.data.plan.likes);
      setCounter(response.data.plan.likes);
      console.log("counter in each cardlistitem", counter);
      counter2 = response.data.plan.likes;
    });
  }

  useEffect(() => {
    fetchCounter();
  }, []);

  function change() {
    axios.post(`http://localhost:3000/plans/likes/${id}`).then((response) => {
      console.log(response.data);
    });
    console.log("change here");
  }

  return (
    <div>
      <h2 className="">{name}</h2>
      <h2 className="">{counter2}</h2>
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
