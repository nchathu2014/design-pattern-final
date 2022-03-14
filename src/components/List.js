import React from "react";
import ListItem from "./ListItem";
import { ThemeContext } from "./../App";

export default function List({ users }) {
  const theme = React.useContext(ThemeContext);
  console.log("Theme", theme);
  const { background, color } = theme;
  return (
    <ul
      style={{
        textAlign: "left",
        padding: 10,
        background: `${background}`,
        color: `${color}`,
      }}
    >
      {users.map((user) => (
        <ListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
