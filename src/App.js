import "./styles.css";
import image from "./images/pattern_composite.JPG";
import image1 from "./images/pattern_composite_1.JPG";
import image2 from "./images/pattern_composite_2.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Composite Design Pattern(Object Tree Pattern)</h1>
      <h2>
        Composite is a structural design pattern that lets you compose objects
        into tree structures and then work with these structures as if they were
        individual objects.
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={500} />
      <img src={image2} width={500} height={300} />
    </div>
  );
}
