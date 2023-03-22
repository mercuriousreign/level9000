import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Application(props) {
  const { state, handleLogin, handleLogout, loginStatus } =
    useApplicationData();

  // useEffect(() => {
  //
  // }, [users]);
  // console.log("Users:", state.users);
  console.log("testing exercises", state.plans);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CardList plans={state.plans} exercises={state.exercises} />
            }
          />

          <Route exact path="/login" element={<Login login={handleLogin} />} />

          <Route path="/signup" element={<SignUp login={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
