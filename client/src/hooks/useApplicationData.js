import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
    users: [],
    plans: [],
    exercises: [],
  });
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    plan_id: null,
  });
  // useEffect(() => {
  //   axios.get("/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/users"),
      axios.get("http://localhost:3000/plans"),
      axios.get("http://localhost:3000/current_user1"),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "cardio" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "strength" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "powerlifting" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "strongman" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "olympic_weightlifting" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "polymetrics" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
      axios.get(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises`, {
        params: { type: "stretching" },
        headers: {
          "X-RapidAPI-Key":
            "21f990903bmshfa7749415fe23b8p1d3e0djsn738b05710a16",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }),
    ])
      .then((all) => {
        let exerciseList = [];
        for (let i = 3; i < all.length; i++) {
          exerciseList = exerciseList.concat(all[i].data);
        }
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          plans: all[1].data,
          exercises: exerciseList,
        }));
        if (all[2].data.user)
          setUser((prev) => ({
            ...prev,
            id: all[2].data.user.id,
            plan_id: all[2].data.user.plan_id,
            email: all[2].data.user.email,
          }));
        if (all[2].data.user.id) {
          setState((prev) => ({ ...prev, isLoggedIn: true }));
        }

        console.log("This is userID", localStorage.getItem("user_id"));
      })
      .catch((err) => console.log(err));

    // loginStatus();
  }, []);
  // const checkLogin = (id) => {
  //   Number.isInteger(parseInt(id));
  // };

  const handleLogin = (data) => {
    setState({
      ...state,
      isLoggedIn: true,
      user: data.user,
    });

    console.log("data is ", data);
    setUser((prev) => ({
      ...prev,
      ...data.user,
      id: data.user.id,
      plan_id: data.user.plan_id,
    }));
    localStorage.setItem("user_id", data.user.id);
    console.log("this is the handleLogin", data.user);
    console.log(
      "this is the handleLogin localstorage",
      localStorage.getItem("user_id")
    );
  };
  const handleLogout = () => {
    setState({
      ...state,
      isLoggedIn: false,
    });
  };
  // const loginStatus = () => {
  //   axios
  //     .get("http://localhost:3000/logged_in")
  //     .then((response) => {
  //       if (response.data.logged_in) {
  //         handleLogin(response);
  //       } else {
  //         handleLogout();
  //       }
  //     })
  //     .catch((error) => console.log("api errors:", error));
  // };

  return { user, setUser, state, handleLogin, handleLogout };
}

//   const addPlan = function(user,planItem) {
//     //axios do a post to user database add the exercise to that specific userdatabase, and then redirect to the homepage
//     //
//     return axios.put(`/users/${user}/`, { planItem }).then((prev) => {
//      setState(prev => ({
//       ...prev,
//       plans,
//       exercises
//      }))
//     })
//   }

//   return { state , addPlan };
// }

//list in order
//cardio
// strength
// powerlifting
// strongman
// olympic_weightlifting
// polymetircs
// stretching
