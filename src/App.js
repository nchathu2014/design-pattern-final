import "./styles.css";
import image from "./images/interpreter_pattern.JPG";
export default function App() {
  return (
    <div className="App">
      <h1>Intepreter Design Pattern</h1>
      <h2>
        <p>
          The Interpreter pattern offers a scripting language that allows
          end-users to customize their solution.
        </p>

        <p>
          Some applications are so complex that they require advanced
          configuration. You could offer a basic scripting language which allows
          the end-user to manipulate your application through simple
          instructions. The Interpreter pattern solves this particular problem –
          that of creating a simple scripting language.
        </p>

        <p>
          Certain types of problems lend themselves to be characterized by a
          language. This language describes the problem domain which should be
          well-understood and well-defined. To implement this you need to map
          the language to a grammar. Grammars are usually hierarchical tree-like
          structures that step through multiple levels and then end up with
          terminal nodes (also called literals).
        </p>

        <p>
          Problems like this, expressed as a grammar, can be implemented using
          the Interpreter design pattern.
        </p>

        <p>
          Today, if you really need this type of control in JavaScript it is
          probably easier to use a code generator like ANTLR which will allow
          you to build your own command interpreters based on a grammar that you
          provide.
        </p>

        <p>
          The objective of this example is to build an interpreter which
          translates roman numerals to decimal numbers: for example, XXXVI = 36.
          <p>
            The Context object maintains the input (the roman numeral) and the
            resulting output as it is being parsed and interpreted. The
            Expression object represents the nodes in the grammar tree; it
            supports the interpret method.
          </p>
          <p>
            When running the program, a simple grammar tree is being built which
            then processes a roman numeral and translates it into a numeric.
          </p>
        </p>
      </h2>
      <img src={image} width={500} height={300} />
    </div>
  );
}
