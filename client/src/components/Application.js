import { useState, useEffect } from "react";
import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";
import Login from "./Login";
import ProgressBar from "./ProgressBar";
import Counter from "./Counter";

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
      <h1>Choose your mission</h1>
      {/* <CardList plans={state.plans} />  */}
      {screen == "/" && <CardList plans={state.plans} exercises={state.exercises} />}

      {screen == "/Login" && <Login/> }

      {/* {screen == "/User" && testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        // <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      ))
      }
      {screen == "/User" && <Counter/>} */}

      {screen == "/User" && <Counter onCountChange={handleCountChange} />}
      {screen == "/User" && <ProgressBar bgcolor='#6a1b9a' completed={progress}/>}
     
    </div>
  );
}
