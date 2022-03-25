import "./styles.css";
import image from "./images/liskov.JPG";
import image1 from "./images/liskov_1.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Software Design Principles - SOLID</h1>
      <h2>
        L - Liskov Subtitution Principle
        <p>
          When extending a class, remember that you should be able to pass
          objects of the subclass in place of objects of the parent class
          without breaking the client code.
        </p>
        <p>
          <span style={{ color: "red" }}>
            This means that the subclass should remain compatible with the
            behavior of the superclass
          </span>
          . When overriding a method, extend the base behavior rather than
          replacing it with something else entirely.
        </p>
        <p>
          The substitution principle is a set of checks that help predict
          whether a subclass remains compatible with the code that was able to
          work with objects of the superclass. This concept is critical when
          developing libraries and frameworks because your classes are going to
          be used by other people whose code you can’t directly access and
          change.
        </p>
        <p>
          Liskov Subtitution: if Dog is a Sub class of Animal. It should be able
          to subtitute Animal with the Dog. Then all Animal code will be
          replaced with Dog and program will work as expected
        </p>
      </h2>
      <img src={image} width={700} height={800} />
      <img src={image1} width={700} height={800} />
    </div>
  );
}
