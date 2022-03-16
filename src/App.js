import "./styles.css";
import image from "./images/test.jpg";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={image} width={500} height={500} />
      <hr />
      <Title render={() => <h1>😎First Render Props😎</h1>} />
      <Title render={() => <h1>❤Second Render Props❤</h1>} />
      <Title render={() => <h1>🐱‍🚀Third Render Props🐱‍🚀</h1>} />
    </div>
  );
}
