import "./styles.css";
import image from "./images/procedural.JPG";
import image1 from "./images/oop.jpg";
import image2 from "./images/abstraction.JPG";
import image3 from "./images/inheritance.JPG";
import image4 from "./images/polymorphism.jpg";
import image5 from "./images/oop-benifits.JPG";

import prodeduralFn from "./utils/procedural/procedural";
import test from "./utils/oop-core/abstraction_with_pvt_properties";

export default function App() {
  const rslt = prodeduralFn();
  console.log(rslt);
  console.log("-----------Private Properties-----------");
  console.log(test);
  return (
    <div className="App">
      <h1>Procedural Programming Approach</h1>
      <img src={image} width={1000} height={400} />

      <hr />

      <h1>Object Oriented Programming - JavaScript</h1>
      <img src={image1} width={1400} height={800} />
      <h2>
        Four Phillars of OOP <br />
        <img src={image5} width={600} height={400} />
        <ul style={{ textAlign: "left" }}>
          <li>
            Encapsulation: <br />
            <span style={{ fontWeight: "normal" }}>
              Group methods and properties into a one single unit
            </span>
          </li>
          <li>
            Abstraction
            <br />
            <img src={image2} width={600} height={400} />
            <br />
            <span style={{ fontWeight: "normal" }}>
              Hide the complexity from the outside, expose a simple interface to
              communicate with the object
            </span>
          </li>
          <li>
            Inheritance <br />
            <img src={image3} width={600} height={400} />
            <br />
            <span style={{ fontWeight: "normal" }}>
              Improve the reusability. Elemeniate redundant code
            </span>
          </li>
          <li>
            Polymorphism (Many Form)
            <br />
            <img src={image4} width={600} height={300} />
            <br />
            <span style={{ fontWeight: "normal" }}>
              Helps to Eliminate long if-else and switch-case statements
            </span>
          </li>
        </ul>
      </h2>
    </div>
  );
}
