import "./styles.css";
import image from "./images/pattern_cor.JPG";
import image1 from "./images/pattern_cor_1.JPG";
import image2 from "./images/pattern_cor_2.JPG";
import image3 from "./images/pattern_cor_3.JPG";
import image4 from "./images/pattern_cor_4.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Chain of Responsibility Design Pattern (CoR, Chain of Command)</h1>
      <h2>
        <p>
          Chain of Responsibility is a behavioral design pattern that lets you
          pass requests along a chain of handlers. Upon receiving a request,
          each handler decides either to process the request or to pass it to
          the next handler in the chain.
        </p>
        <p>
          The Chain of Responsibility pattern provides a chain of loosely
          coupled objects one of which can satisfy a request. This pattern is
          essentially a linear search for an object that can handle a particular
          request.
        </p>
      </h2>
      <img src={image} width={500} height={600} />
      <img src={image1} width={500} height={400} />
      <img src={image2} width={500} height={400} />
      <img src={image3} width={500} height={300} />
      <img src={image4} width={500} height={400} />
    </div>
  );
}
