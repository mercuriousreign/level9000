import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
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
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return { state };
}

//list in order
//cardio
// strength
// powerlifting
// strongman
// olympic_weightlifting
// polymetircs
// stretching
