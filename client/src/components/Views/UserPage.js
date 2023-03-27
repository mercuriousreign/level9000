import React, { useEffect, useState } from "react";
import { Calendar, Button, Checkbox, Collapse } from "antd";
import "../Calendar/DayListItem.css";
import CharacterPage from "./CharacterPage";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import CharacterInfoPage from "./CharacterInfoPage";
import { cleanup, render } from "@testing-library/react";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

export default function UserPage(props) {
  let [viewChar, setCharPage] = useState(false);

  const exercises = (planID) => {
    const exerciseIndex = [
      [15, 10, 19, 29, 43, 45],
      [12, 18, 24, 34, 39, 6],
      [7, 9, 37, 58, 56, 52],
      [11, 6, 3, 57, 39, 19],
      [1, 0, 9, 6, 10, 58],
      [16, 13, 26, 34, 35, 42],
      [37, 38, 39, 40, 41, 42],
      [18, 33, 59, 44, 8, 6],
      [18, 33, 11, 52, 53, 54],
      [31, 32, 34, 16, 53, 52],
    ];
    const exerciseList = exerciseIndex[parseInt(planID) - 1].map(
      (each, index) => (
        <CollapsePanel
          headerStyle={{ fontWeight: "bold" }}
          showArrow={false}
          // header={props.exercises[parseInt(each)].name}
          extra={<h3>{props.exercises[parseInt(each)].name}</h3>}
        >
          <li key={index}>
            {" "}
            {/* <h3>{props.exercises[parseInt(each)].name}</h3> */}
            {props.exercises[parseInt(each)].instructions}
            <br />
          </li>
        </CollapsePanel>
      )
    );
    console.log("exercises2", props.exercises[1].instructions);
    return (
      <Collapse style={{ fontSize: 13 }}>{exerciseList}</Collapse>
      // <Collapse>
      //   <ul style={{ display: "flex", flexDirection: "column" }}>
      //     {exerciseList}
      //   </ul>
      // </Collapse>
    );
  };

  const [dates, setDates] = useState({});

  const linkCharacter = () => {
    setCharPage(!viewChar);
    console.log("character page in ", viewChar);
  };

  const fetchDates = () => {
    const currentUser = localStorage.getItem("user_id");
    axios
      .get(`http://localhost:3000/plans/date/${currentUser}`)
      .then((response) => {
        const newDates = {};
        response.data.plan_date.forEach((date) => {
          newDates[date] = true;
        });
        setDates(newDates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      fetchDates();
    }
  }, []);

  const addPlanDate = (date) => {
    const currentUser = localStorage.getItem("user_id");
    const sendData = { userid: currentUser, plan_date: date };
    axios
      .post(`http://localhost:3000/plans/date/${currentUser}`, sendData)
      .then((response) => {
        fetchDates();
      })
      .catch((err) => {
        console.log("response in the onChange catch", err);
      });
  };

  const onChange = (date, e) => {
    const df = date.format("YYYY-MM-DD");
    addPlanDate(df);
  };

  function dayItem(date) {
    const df = date.format("YYYY-MM-DD");
    const status = dates[df] || false;

    return <Checkbox checked={status} onChange={(e) => onChange(date, e)} />;
  }

  return (
    <div>
      {viewChar && (
        <div>
          <Button
            ghost
            onClick={linkCharacter}
            style={{ marginBottom: "3%", marginTop: "3%" }}
            value={"large"}
          >
            ←
          </Button>{" "}
          <CharacterInfoPage plan={props.plan} />
        </div>
      )}
      {!viewChar && (
        <div>
          <h1 className="headerfont">Planned schedule</h1>
          {props.plan && (
            <Button
              ghost
              onClick={linkCharacter}
              style={{ marginBottom: "1%" }}
            >
              More character Info
            </Button>
          )}
          {props.plan && (
            <CharacterPage
              name={props.plan.name}
              img={props.plan.FinalForm}
              exercises={exercises}
              user={props.user}
            />
          )}
          {!props.plan && <h1>GO CHOOSE A PLAN!!!!</h1>}

          <div className="calendarborder">
            <Calendar dateCellRender={(date) => dayItem(date)} />
          </div>
        </div>
      )}
    </div>
  );
}
