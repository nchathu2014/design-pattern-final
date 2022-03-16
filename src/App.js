import "./styles.css";
import image from "./images/module_pattern.JPG";
/* 
import {
  add as addValues,
  subtract,
  multiply as mulValues,
  square,
} from "./utils/math"; */

import * as math from "./utils/math";

function add(...args) {
  return args.reduce((acc, crr) => acc + crr);
}

function multiply(...args) {
  return args.reduce((acc, crr) => acc * crr);
}

export default function App() {
  return (
    <div className="App">
      <h1>Module Design Pattern</h1>
      <h2>
        <p>Split up your code into smaller, reusable pieces.</p>

        <p>
          As your application and codebase grow, it becomes increasingly
          important to keep your code maintainable and separated. The module
          pattern allows you to split up your code into smaller, reusable
          pieces.
        </p>

        <p>
          Besides being able to split your code into smaller reusable pieces,
          modules allow you to keep certain values within your file private
        </p>

        <p>
          Oneway to exporting functions is 'NAMED EXPORTS' by using keyword
          'export'
        </p>
      </h2>
      <img src={image} width={500} height={500} />
      <hr />
      if X=3 and Y=5
      <ul style={{ textAlign: "left", fontSize: 16 }}>
        <li>Add: {math.add(3, 5)}</li>
        <li>Subtraction: {math.subtract(3, 5)}</li>
        <li>Multiplication: {math.multiply(3, 5)}</li>
        <li>Square of X: {math.square(3, 5)}</li>
        <li>
          <hr />
        </li>
        <li>Add more: {add(1, 2, 3, 4)}</li>
        <li>Multiply more: {multiply(1, 2, 3, 4)}</li>
      </ul>
    </div>
  );
}
