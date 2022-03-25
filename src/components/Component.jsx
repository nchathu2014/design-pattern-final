import React from 'react';

export default function Component({ title,handleIncrement, handleDecrement}) {
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleIncrement}>Increment (+)</button>
      <button onClick={handleDecrement}>Decrement (-)</button>
    </>
  )
}