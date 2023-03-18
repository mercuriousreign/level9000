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
      <p>`${state.users[0]?.email}`</p>
      <img src="https://i.pinimg.com/474x/c8/af/90/c8af903d667860c8993e46bec640dfa6.jpg" />
      {/* <img src={state.users[0]?.img} /> */}
    </div>
  );
}
