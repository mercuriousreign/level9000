import "./Application.css";
import Navbar from "./navbar";
import useApplicationData from "../hooks/useApplicationData";

export default function Application(props) {
  const { users } = useApplicationData();

  // useEffect(() => {
  //
  // }, [users]);
  console.log("Users:", users);
  return (
    <div className="App">
      <Navbar user={users} />
      <h1>Choose your mission</h1>
      <p>`${users[0]?.email}`</p>
      <img src="https://i.pinimg.com/474x/c8/af/90/c8af903d667860c8993e46bec640dfa6.jpg" />
    </div>
  );
}
