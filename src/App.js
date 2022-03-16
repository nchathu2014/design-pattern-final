import "./styles.css";
import image from "./images/mixin_pattern.JPG";

import dog from "./utils/mixin";

export default function App() {
  {
    console.log(dog);
    dog.play();
    dog.bark();
    dog.wagTail();

    dog.sleep();
    dog.walk();
  }
  return (
    <div className="App">
      <h1> Mixin Design Pattern</h1>
      <h2>
        <p>Add functionality to objects or classes without inheritance.</p>
        <p>
          A mixin is an object that we can use in order to add reusable
          functionality to another object or class, without using inheritance.
          We can't use mixins on their own: their sole purpose is to add
          functionality to objects or classes without inheritance.
        </p>
      </h2>
      <img src={image} width={800} height={800} />

      <hr />
    </div>
  );
}
