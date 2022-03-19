import "./styles.css";
import image from "./images/decorator_pattern.JPG";
import image1 from "./images/decorator_pattern_1.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Decorator Design Pattern</h1>
      <h2>
        <p>
          Decorator is a structural design pattern that lets you attach new
          behaviors to objects by placing these objects inside special wrapper
          objects that contain the behaviors.
        </p>
        <p>
          The Decorator pattern extends (decorates) an object’s behavior
          dynamically. The ability to add new behavior at runtime is
          accomplished by a Decorator object which ‘wraps itself’ around the
          original object. Multiple decorators can add or override functionality
          to the original object.
        </p>
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={200} />
    </div>
  );
}
