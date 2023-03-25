import React, { useEffect, useState } from "react";
import { Calendar, Button, Checkbox } from "antd";
import "../Calendar/DayListItem.css";
import CharacterPage from "./CharacterPage";
import axios from "axios";
import "./UserPage.css"

export default function UserPage(props) {
  const exercises = (planID) => {
    const exerciseIndex = [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
      [37, 38, 39, 40, 41, 42],
      [43, 44, 45, 46, 47, 48],
      [49, 50, 51, 52, 53, 54],
      [54, 55, 56, 57, 58, 59],
    ];
    const exerciseList = exerciseIndex[parseInt(planID) - 1].map(
      (each, index) => (
        <li key={index}>
          {" "}
          <h3>{props.exercises[parseInt(each)].name}</h3>
          {props.exercises[parseInt(each)].instructions}
          <br />
        </li>
      )
    );
    console.log("exercises2", props.exercises[1].instructions);
    return (
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {exerciseList}
      </ul>
    );
  };

  // const [dates, setDates] = useState({});

  // useEffect(() => {
  //   let currentUser = "";
  //   if (localStorage.getItem("user_id")) {
  //     currentUser = localStorage.getItem("user_id");
  //     axios
  //       .get(`http://localhost:3000/plans/date/${currentUser}`)
  //       .then((response) => {
  //         const newDates = {};
  //         response.data.plan_date.forEach((date) => {
  //           newDates[date] = true;
  //         });
  //         setDates(newDates);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  // const onChange = (date, e) => {
  //   const df = date.format("YYYY-MM-DD");
  //   let currentUser = "";
  //   if (localStorage.getItem("user_id")) {
  //     currentUser = localStorage.getItem("user_id");
  //   }
  //   const sendData = { userid: currentUser, plan_date: df };
  //   axios
  //     .post(`http://localhost:3000/plans/date/${currentUser}`, sendData)
  //     .then((response) => {
  //       console.log("thereponse issss", response.data, sendData);
  //       axios
  //         .get(`http://localhost:3000/plans/date/${currentUser}`)
  //         .then((response) => {
  //           const newDates = {};
  //           response.data.plan_date.forEach((date) => {
  //             newDates[date] = true;
  //           });
  //           setDates(newDates);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log("response in the onChange catch", err);
  //     });
  // };

  const [dates, setDates] = useState({});

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
    <div class="container">
      {props.plan && (
        <CharacterPage
          name={props.plan.name}
          img={props.plan.img}
          description={props.plan.description}
          exercises={exercises}
          user={props.user}
        />
      )}
      {!props.plan && <h1>GO CHOOSE A PLAN!!!!</h1>}
      <div className="calendarborder">
        <Calendar dateCellRender={(date) => dayItem(date)} />
      </div>
    </div>
  );
}
