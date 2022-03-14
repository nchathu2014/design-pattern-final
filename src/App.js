import "./styles.css";
import image from "./images/container_presentational_pattern.JPG";
import Container from "./components/Container";
export default function App() {
  return (
    <div className="App">
      <h1>Container/ Presentational Design Pattern</h1>
      <Container />
      <h2>
        Enforce separation of concerns by separating the view from the
        application logic. In React, one way to enforce separation of concerns
        is by using the Container/Presentational pattern. With this pattern, we
        can separate the view from the application logic. Let's say we want to
        create an application that fetches 6 dog images, and renders these
        images on the screen. Ideally, we want to enforce separation of concerns
        by separating this process into two parts:
        <ol style={{ textAlign: "left" }}>
          <li>
            <b>Presentational Components:</b>
            <p>
              Components that care about how data is shown to the user. In this
              example, that's the rendering the list of dog images.
            </p>
          </li>
          <li>
            <b>Container Components:</b>
            <p>Components that care about what data is shown to the user.</p>
          </li>
        </ol>
      </h2>
      <img src={image} width={400} height={400} />

      <hr />
    </div>
  );
}
