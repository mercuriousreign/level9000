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
  // useEffect(() => {
  //   axios.get("/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/users"),
      axios.get("http://localhost:3000/plans"),
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
        for (let i = 2; i < all.length; i++) {
          exerciseList = exerciseList.concat(all[i].data);
        }
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          plans: all[1].data,
          exercises: exerciseList,
          //isLoggedIn : true ////////////fakeuser idloggedin
        }));
      })
      .catch((err) => console.log(err));
    // loginStatus();
  }, []);

  const handleLogin = (data) => {
    setState({
      ...state,
      isLoggedIn: true,
      user: data.user,
    });
    setUser({ ...user, id: data.user.id, plan_id: data.user.plan_id });
    console.log("this is the handleLogin", data.user);
  };
  const handleLogout = () => {
    setState({
      ...state,
      isLoggedIn: false,
      user: {},
    });
    setUser({});
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
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    plan_id: null,
  });

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
