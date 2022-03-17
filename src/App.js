import "./styles.css";
import image from "./images/test.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Command Design Pattern</h1>
      <h2>
        Decouple methods that execute tasks by sending commands to a commander
        <p>
          As you can see there are 4 commands in Calculator class as,
          add(),subtract(), multiply() and divide()
          <p>
            As per the definition of command pattern we have to ENCAPSULATE
            above mentioned conmmands as DO and UNDO manner Do and Undo more
            useful in a situation like saving a user to a DB and if want, in
            case of UNDO that operation So we have to get those commands out of
            the class and do the encapsulation.
          </p>
          <p>
            IMPORTANT: we can combine commands Example: Instead of doing add()
            and subtraction() seperately, we can combine them into one * as
            addAndSubtraction()
          </p>
          <p>
            it is same as, save(), exit() and save_and_exit() as three seperate
            functions, we can only create save() and exit() and combind the
            commands as saveAndExit()
          </p>
        </p>
      </h2>
      <img src={image} width={500} height={500} />
      <hr />
    </div>
  );
}
