/* function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  }
  
  function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  }
  
  export function getPostsByUser() {
    getUsers().then((users) => {
      users.forEach((user) => {
        getUserPosts(user.id).then((posts) => {
          console.log(user.name + "-" + posts.length);
        });
      });
    });
  }
   */

function getUsers() {
  return userFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return userFetch(`https://jsonplaceholder.typicode.com/posts`, { userId });
}

export function getPostsByUser() {
  getUsers().then((users) => {
    users.forEach((user) => {
      getUserPosts(user.id).then((posts) => {
        console.log(user.name + "-" + posts.length);
      });
    });
  });
}

/**
 * As you can see getUsers() and getPostsByUser() have common codes and
 * code maintainability is not good. We can introduce a facade to reduce the complexity
 *
 */

function userFetch(url, params = {}) {
  const queryString = Object.entries(params).map((param) => {
    return `${param[0]}=${param[1]}`;
  });
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

/**
 * userFetch('https://jsonplaceholder.typicode.com/posts', {userId:1})
 *
 */
