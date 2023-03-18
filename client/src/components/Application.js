import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";
import CardList from "./CardList";

export default function Application(props) {
  const { state } = useApplicationData();

  // useEffect(() => {
  //
  // }, [users]);
  console.log("Users:", state.users);
  return (
    <div className="App">
      <Navbar />
      <h1>Choose your mission</h1>
      <CardList plans={state.plans} />
    </div>
  );
}
