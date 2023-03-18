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
    </div>
  );
}
