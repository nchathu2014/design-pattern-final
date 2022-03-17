import React, { useEffect, useState } from "react";

const withCurrentUser = (Component) => {
  return ({ userId, ...props }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      async function fetchUser() {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await res.json();

        return setUser(user);
      }

      fetchUser();
    }, []);

    if (!user) return "Loading...!";
    return (
      <>
        <Component {...props} user={user} />
        <hr />
      </>
    );
  };
};

export default withCurrentUser;
