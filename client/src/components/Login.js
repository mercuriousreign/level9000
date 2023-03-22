import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const [state, setState] = useState({
    email: "",
    username: "",
    passowrd: "",
  });
  const [err, setErr] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = state;
    let user = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/login", { user })
      .then((response) => {
        if (response.data.logged_in) {
          props.login(response.data);
          redirect();
        } else {
          setErr(response.data.errors);
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  if (err) {
    return handleErrors();
  }
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or <Link to="/signup">sign up</Link>
        </div>
      </form>
    </div>
  );
}
