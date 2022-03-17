import "./styles.css";
import image from "./images/facade_pattern.JPG";
import image1 from "./images/facade_pattern_1.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Facade Design Pattern</h1>
      <h2>
        Facade is a structural design pattern that provides a simplified
        interface to a library, a framework, or any other complex set of
        classes.
      </h2>
      <img src={image} width={700} height={1000} />
      <img src={image1} width={1000} height={300} />
    </div>
  );
}
