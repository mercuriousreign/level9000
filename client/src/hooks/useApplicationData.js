import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    users: [],
    plans: [],
  });
  // useEffect(() => {
  //   axios.get("/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    Promise.all([axios.get("/users"), axios.get("/plans")])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          users: all[0].data,
          plans: all[1].data,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return { state };
}
