import React from "react";

export default function User({ user }) {
  return (
    <div>
      <strong>
        {user.name} | {user.username}
      </strong>
      <br />
      {user.email}
    </div>
  );
}
