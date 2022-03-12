import React from "react";

export default function ComponentA({ handleIncrement, handleDecrement }) {
  return (
    <div>
      ComponentA
      <button onClick={handleIncrement}>Increment(+)</button>
      <button onClick={handleDecrement}>Decrement(-)</button>
    </div>
  );
}
