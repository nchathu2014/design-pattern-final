import { useEffect, useState } from "react";
import "./styles.css";
import image from "./images/singleton_pattern.JPG";
import image1 from "./images/singleton_pattern_1.JPG";
import image2 from "./images/singleton_pattern_2.JPG";
import ComponentA from "./components/ComponentA";

import SingletonCounter from "./utils/singleton";

export default function App() {
  const [count, setCount] = useState();
  useEffect(() => {
    SingletonCounter.setCount(10);
    setCount(SingletonCounter.getCount());
  }, []);

  const handleIncrement = () => {
    SingletonCounter.increment();
    setCount(SingletonCounter.getCount());
  };
  const handleDecrement = () => {
    SingletonCounter.decrement();
    setCount(SingletonCounter.getCount());
  };

  return (
    <div className="App">
      <h1>Singleton Design Pattern</h1>
      <h2>
        Singleton is a creational design pattern that lets you ensure that a
        class has only one instance, while providing a global access point to
        this instance.Helps to limit the nuber of instances of an object to ONE.
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={500} />
      <img src={image2} width={500} height={800} />

      <hr />
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment(+)</button>
      <button onClick={handleDecrement}>Decrement(-)</button>

      <h2>Other Components Area</h2>
      <ComponentA
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
