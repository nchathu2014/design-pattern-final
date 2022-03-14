import React from "react";

export default function Presentational({ dogs }) {
  console.log(dogs);
  return (
    <ul>
      {dogs.map((dog, i) => (
        <img key={i} src={dog} alt="Dogs" width={200} height={200} />
      ))}
    </ul>
  );
}
