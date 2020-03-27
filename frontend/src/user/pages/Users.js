import React from "react";

import UsersList from "../components/UsersList";

function users() {
  const USERS = [
    {
      id: "u1",
      name: "Umesh Shrestha",
      image:"https://avatars2.githubusercontent.com/u/59211403?s=400&v=4",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default users;
