import "./styles.css";
import image from "./images/pattern_bridge.JPG";
import image1 from "./images/pattern_bridge_1.JPG";
import image2 from "./images/pattern_bridge_2.JPG";
import image3 from "./images/pattern_bridge_3.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Bridge Design Pattern (Double Adapter Pattern)</h1>
      <h2>
        <p>
          Bridge is a structural design pattern that lets you split a large
          class or a set of closely related classes into two separate
          hierarchies—abstraction and implementation—which can be developed
          independently of each other.
        </p>

        <p>
          The Bridge pattern allows two components, a client and a service, to
          work together with each component having its own interface. Bridge is
          a high-level architectural pattern and its main goal is to write
          better code through two levels of abstraction. It facilitates very
          loose coupling of objects. It is sometimes referred to as a double
          Adapter pattern.
        </p>

        <p>
          An example of the Bridge pattern is an application (the client) and a
          database driver (the service). The application writes to a
          well-defined database API, for example ODBC, but behind this API you
          will find that each driver's implementation is totally different for
          each database vendor (SQL Server, MySQL, Oracle, etc.).
        </p>

        <p>
          The Bridge pattern is a great pattern for driver development but it is
          rarely seen in JavaScript.
        </p>
      </h2>
      <img src={image} width={600} height={800} />
      <img src={image1} width={600} height={400} />
      <img src={image2} width={500} height={600} />
      <img src={image3} width={1000} height={400} />
    </div>
  );
}
