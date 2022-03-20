import "./styles.css";
import image from "./images/memento_pattern.JPG";
import image1 from "./images/memento_pattern_1.JPG";
import image2 from "./images/memento_pattern_2.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Momento Design Pattern (Snapshot)</h1>
      <h2>
        <p>
          Memento is a behavioral design pattern that lets you save and restore
          the previous state of an object without revealing the details of its
          implementation.
        </p>
        <p>
          The Memento pattern provides temporary storage as well as restoration
          of an object. The mechanism in which you store the object’s state
          depends on the required duration of persistence, which may vary.
        </p>
        <p>
          You could view a database as an implementation of the Memento design
          pattern in which objects are persisted and restored. However, the most
          common reason for using this pattern is to capture a snapshot of an
          object’s state so that any subsequent changes can be undone easily if
          necessary.
        </p>
        <p>
          Essentially, a Memento is a small repository that stores an object’s
          state. Scenarios in which you may want to restore an object into a
          state that existed previously include: saving and restoring the state
          of a player in a computer game or the implementation of an undo
          operation in a database.
        </p>
        <p>
          In JavaScript Mementos are easily implemented by serializing and
          de-serializing objects with JSON.
        </p>
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={300} />
      <img src={image2} width={500} height={300} />
    </div>
  );
}
