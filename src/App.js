import "./styles.css";
import image from "./images/adapter_pattern.JPG";
import image1 from "./images/adapter_pattern_1.JPG";
import image2 from "./images/adapter_pattern_2.JPG";
import image3 from "./images/adapter_pattern_3.JPG";
export default function App() {
  return (
    <div className="App">
      <h1>Adapter Design Pattern (aka Wrapper)</h1>
      <h2>
        Adapter is a structural design pattern that allows objects with
        incompatible interfaces to collaborate
      </h2>
      <img src={image} width={800} height={400} />
      <img src={image1} width={800} height={600} />
      <img src={image2} width={800} height={400} />
      <img src={image3} width={800} height={400} />
    </div>
  );
}
