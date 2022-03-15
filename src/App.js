import "./styles.css";
import image from "./images/test.jpg";
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
      </h2>
      <img src={image} width={500} height={500} />
    </div>
  );
}
