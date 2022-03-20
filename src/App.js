import "./styles.css";
import image from "./images/template_method.JPG";
import image1 from "./images/template_method_1.JPG";
import image2 from "./images/template_method_2.JPG";
import image3 from "./images/template_method_3.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Template Method Design Pattern</h1>
      <h2>
        <p>
          The Template Method pattern provides an outline of a series of steps
          for an algorithm. Objects that implement these steps retain the
          original structure of the algorithm but have the option to redefine or
          adjust certain steps. This pattern is designed to offer extensibility
          to the client developer. JavaScript Patterns
        </p>

        <p>
          Template Methods are frequently used in general purpose frameworks or
          libraries that will be used by other developer An example is an object
          that fires a sequence of events in response to an action, for example
          a process request. The object generates a 'preprocess' event, a
          'process' event and a 'postprocess' event. The developer has the
          option to adjust the response to immediately before the processing,
          during the processing and immediately after the processing.
        </p>

        <p>
          An easy way to think of Template Method is that of an algorithm with
          holes (see diagram below). It is up to the developer to fill these
          holes with appropriate functionality for each step.
        </p>
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={500} />
      <img src={image2} width={500} height={500} />
      <img src={image3} width={500} height={500} />
    </div>
  );
}
