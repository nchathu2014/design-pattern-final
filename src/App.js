import "./styles.css";
import retryOperation from "./utils/retry";

export default function App() {
  retryOperation();
  return (
    <div className="App">
      <h1>Retry Design Pattern</h1>
      <h2>
        Allows to handle temporary faliurs in a application. When an application
        trying to communicate with an external API or a Database system or other
        external service faliurs can be occure.
      </h2>

      <p>
        <h3>Retry Strategies</h3>
        <ol style={{ textAlign: "left" }}>
          <li>
            <b>Don't retry :</b> Authentication faliurs with invalid
            credentials. No need to retry.
          </li>
          <li>
            <b>Retry immediately: </b> Data packet currupted in a NW call.
            Better to retry right after immediately that curruption happens
          </li>
          <li>
            <b>Retry after delay: </b> Downloading huge data file
          </li>
        </ol>
      </p>
    </div>
  );
}
