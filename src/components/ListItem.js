import React from "react";

export default function ListItem({ user }) {
  return (
    <li>
      {user.name} {user.isActive && <a href="#">Proceed</a>}
    </li>
  );
}
