import "./styles.css";
import image from "./images/single_res_principle.JPG";
import image1 from "./images/single_res_principle_1.JPG";
import ct from "./utils/calorie_tracker";

export default function App() {
  ct.trackCalories(500);
  ct.trackCalories(1000);
  ct.trackCalories(800);
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Software Design Principles - SOLID </h1>
      <h2>
        S - Single Responsibility Principle
        <p>A Class Should have just one reason to change</p>
        <p>
          Try to make every class responsible for a single part of the
          functionality provided by the software, and make that responsibility
          entirely encapsulated by (you can also say hidden within) the class.
        </p>
        <p>
          <span style={{ color: "red" }}>
            The main goal of this principle is reducing complexity
          </span>
          . You don’t need to invent a sophisticated design for a program that
          only has about 200 lines of code. Make a dozen methods pretty, and
          you’ll be fine.
        </p>
      </h2>
      <img src={image} width={800} height={500} />
      <img src={image1} width={800} height={500} />
    </div>
  );
}
