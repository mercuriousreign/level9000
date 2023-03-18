import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return { users };
}
