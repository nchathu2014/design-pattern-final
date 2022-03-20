import "./styles.css";
import image from "./images/state_pattern.JPG";
import image1 from "./images/state_pattern_1.JPG";
import image2 from "./images/state_pattern_2.JPG";
import image3 from "./images/state_pattern_3.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>State Design Pattern</h1>
      <h2>
        <p>
          State is a behavioral design pattern that lets an object alter its
          behavior when its internal state changes. It appears as if the object
          changed its class.
        </p>
        <p>
          The State pattern provides state-specific logic to a limited set of
          objects in which each object represents a particular state.
        </p>
      </h2>
      <img src={image} width={800} height={900} />
      <img src={image1} width={800} height={900} />
      <img src={image2} width={500} height={500} />
      <img src={image3} width={500} height={500} />
    </div>
  );
}
