import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import axios from "axios";

type User = {
  id: number;
  name: string;
};
export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  axios
    .get("http://localhost:3000/users")
    .then((response: any) => {
      setUsers(response.data.users);
    })
    .catch(() => {
      console.log("error");
    });

  return (
    <>
      {users.map((user: User) => (
        <div>{user.name}</div>
      ))}
    </>
  );
};
