import "./styles.css";
import image from "./images/test.jpg";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={image} width={500} height={500} />
    </div>
  );
}
