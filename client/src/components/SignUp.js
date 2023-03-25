import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordconfirmation] = useState("");

  const [err, setErr] = useState();
  const handleSubmit = (event) => {
    console.log("testin");
    event.preventDefault();

    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    axios
      .post("http://localhost:3000/users", { user })
      .then((response) => {
        if (response.data.status === "created") {
          props.login(response.data);
          redirect();
        } else {
          setErr(response.data.errors);
          // setState({
          //   errors: response.data.errors,
          // });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {err.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  if (err) {
    return handleErrors();
  }
  return (
    <div class="login-form">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        placeholder="email"
        type="text"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        placeholder="password confirmation"
        type="password"
        name="password_confirmation"
        value={props.user.password_confirmation}
        onChange={(event) => setPasswordconfirmation(event.target.value)}
      />
  
      <button placeholder="submit" type="submit">
        Sign Up
      </button>
    </form>
  </div>
  );
}
