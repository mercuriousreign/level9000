import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  
  const [err, setErr] = useState();
  const handleSubmit = (event) => {
    console.log("testin");
    event.preventDefault();
    const { username, email, password, password_confirmation } = props.user;
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

  const handleChange = (event) => {
    props.setUser({ ...props.user, [event.target.name]: event.target.value });
  };
  if (err) {
    return handleErrors();
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={props.user.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={props.user.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={props.user.password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={props.user.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
