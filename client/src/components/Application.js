import { useState, useEffect } from "react";
import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";
import ProgressBar from "./ProgressBar";
import Counter from "./Counter";
import CompletedButton from "./CompletedButton";
import UserPage from "./Views/UserPage";
import Button from "./Button";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Application(props) {
  ////**************** Progress tracker  *************************
  const testData = [{ bgcolor: "#6a1b9a", completed: 60 }];

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    // setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const [progress, setProgress] = useState(0);

  function handleCountChange(count) {
    setProgress((count / 6) * 100);
  }

  ////*****************************************************

  const { state, addPlan, handleLogin, handleLogout, loginStatus } =
    useApplicationData();
  useEffect(() => {
    console.log("isLoggedIn changed?", state.isLoggedIn);
  }, [state.isLoggedIn]);

  console.log("testing exercises", state.plans);
  console.log("isloggedIN", state.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logout={handleLogout} loggedOut={state.isLoggedIn} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <h1>
                  Welcome to Over9000. Work out plans designed to make as
                  strong as your Hero Each plan consists of 6 excercises. You'll
                  do one excerxise as many times as possible each day plus on
                  rest day. Now choose your challenge:
                </h1>
                <CardList plans={state.plans} exercises={state.exercises} />
              </div>
            }
          />

          <Route exact path="/login" element={<Login login={handleLogin} />} />
      
          <Route path="/signup" element={<SignUp login={handleLogin} />} />
          <Route
            path="/user"
            element={
              state.isLoggedIn ? (
                <div>
                  <Counter onCountChange={handleCountChange} />
                  <ProgressBar bgcolor="#6a1b9a" completed={progress} />
                  <UserPage plan={state.plans[0]} />
                </div>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
