import { useState, useEffect } from "react";
import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";

import UserPage from "./Views/UserPage";
import Button from "./Button";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import CharacterInfoPage from "./Views/CharacterInfoPage";
import { ConfigProvider } from "antd";
import image from "../img/vegeta2.gif";

export default function Application(props) {
  ////**************** Progress tracker  *************************
  const testData = [
    { day: "Monday", bgcolor: "#6a1b9a", completed: 60 },
    { day: "Tuesday", bgcolor: "#6a1b9a", completed: 60 },
    { day: "Wednesday", bgcolor: "#6a1b9a", completed: 60 },
    { day: "Thursday", bgcolor: "#6a1b9a", completed: 60 },
    { day: "Friday", bgcolor: "#6a1b9a", completed: 60 },
    { day: "Saturday", bgcolor: "#6a1b9a", completed: 60 },
  ];

  const [completed, setCompleted] = useState(0);

  useEffect(() => {}, []);

  const [progresses, setProgresses] = useState(testData.map((item) => 0));

  function handleCountChange(count, idx) {
    let newProgresses = [...progresses];
    newProgresses[idx] = (count / 6) * 100;
    setProgresses(newProgresses);
  }

  ////*****************************************************

  const {
    plans,
    addLikes,
    user,
    setUser,
    state,
    addPlan,
    handleLogin,
    handleLogout,
    loginStatus,
  } = useApplicationData();
  useEffect(() => {
    console.log("isLoggedIn changed?", state.isLoggedIn);
    console.log("current_user", user);
  }, [state.isLoggedIn]);

  console.log("testing exercises", state.plans);
  console.log("isloggedIN", state.isLoggedIn);
  // const finalForm = () => {
  //   const finals = state.plans.map((each) => {
  //     return (
  //       <li key={each.id}>
  //         <img src={each.FinalForm} alt="final form" />
  //       </li>
  //     );
  //   });
  //   return (
  //     <div>
  //       <ul>{finals}</ul>
  //     </div>
  //   );
  // };
  // const exercisesTest = state.exercises.map((each, index) => {
  //   return (
  //     <li key={index}>
  //       {index}. {each.name}
  //     </li>
  //   );
  // });
  console.log("exercisesTest", state.exercises);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,

        height: "100%",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BrowserRouter>
        <Navbar logout={handleLogout} loggedOut={state.isLoggedIn} />
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#342f2f", colorTextHeading: "white" },
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <CardList
                    plans={state.plans}
                    exercises={state.exercises}
                    user={user}
                    setUser={setUser}
                    addLikes={addLikes}
                    planList={plans}
                  />
                </div>
              }
            />

            <Route
              exact
              path="/login"
              element={
                <Login user={user} setUser={setUser} login={handleLogin} />
              }
            />

            <Route
              path="/signup"
              element={
                <SignUp user={user} setUser={setUser} login={handleLogin} />
              }
            />
            <Route
              path="/user"
              element={
                state.isLoggedIn ? (
                  <div>
                    <UserPage
                      plan={state.plans[user.plan_id - 1]}
                      user={user}
                      exercises={state.exercises}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      paddingBottom: "400px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <h1
                      style={{
                        color: "yellow",
                        padding: "300px",
                        fontSize: "125px",
                      }}
                    >
                      Loading...
                    </h1>
                  </div>
                )
              }
            />
            <Route
              path="/character"
              element={<CharacterInfoPage plan={state.plans[1]} />}
            />
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
}
