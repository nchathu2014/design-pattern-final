import { useEffect, useState } from "react";
import "./styles.css";
import image from "./images/singleton_pattern.JPG";
import image1 from "./images/singleton_pattern_1.JPG";
import image2 from "./images/singleton_pattern_2.JPG";
import ComponentA from "./components/ComponentA";

import SingletonCounter from "./utils/singleton";

import CounterState from "./../src/utils/SingletonState";
import Component from "./../src/components/Component";
import Counter from "./../src/components/Counter";
import { useCounter } from "./../src/hooks/useCounter";

const counterState = CounterState.getInstance();
counterState.setState({ count: 10 });

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

  //----------------------

  const [counter, increment, decrement] = useCounter(counterState, {
    KEY: "count",
  });
  const incrementCounter = () => increment();
  const decrementCounter = () => decrement();

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

      <hr />
      <main>
        <Counter count={counter} />
        <Component
          title={"Component A"}
          handleIncrement={incrementCounter}
          handleDecrement={decrementCounter}
        />
        <Component
          title={"Component B"}
          handleIncrement={incrementCounter}
          handleDecrement={decrementCounter}
        />
      </main>
    </div>
  );
}
