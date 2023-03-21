import { useState, useEffect } from "react";
import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";
import Login from "./Login";
import ProgressBar from "./ProgressBar";
import Counter from "./Counter";
import CompletedButton from "./CompletedButton";

export default function Application(props) {


////**************** Progress tracker  *************************
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
  ];

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const [progress, setProgress] = useState(0);

  function handleCountChange(count) {
    setProgress((count/6) * 100);
  }

////*****************************************************

////**************** COnditional page rendering *************************

  const [screen, setScreen] = useState('/login')

  const [pathName, setPathName] = useState(window.location.pathname)

  useEffect(()=> {
    setScreen(window.location.pathname)
  }, [window.location.pathname])

//**************************************************
  const { state } = useApplicationData();

  console.log("testing exercises", state.plans);
  return (
    <div className="App">
      <Navbar />
      {screen == "/" && <h1>Welcom to Level9000. Work out plans designed to make as strong as your Hero
        Each plan consists of 6 excercises. You'll do one excerxise as many times as possible each day plus on rest day. 
        Now choose your challenge:</h1>}

      {screen == "/" && <CompletedButton/>}

      {screen == "/" && <CardList plans={state.plans} exercises={state.exercises} />}

      {screen == "/Login" && <Login/> }


      {screen == "/User" && <Counter onCountChange={handleCountChange} />}
      {screen == "/User" && <ProgressBar bgcolor='#6a1b9a' completed={progress}/>}
     
    </div>
  );
}
