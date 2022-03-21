import "./styles.css";
import image from "./images/test.jpg";

import smo from "./utils/monkey-patching-preventing";

export default function App() {
  const result = smo.add(10, 20);
  console.log(`result1: ${result}`);

  console.log(`------------------------`);
  // Make a copy of the original add function
  const originalAdd = smo.add;
  console.log(originalAdd);
  // Making Monkey Patch

  smo.add = (a, b) => {
    console.log(`Adding the result of ${a} and ${b}`);
    return originalAdd(a, b);
  };
  const result2 = smo.add(10, 20);
  console.log(`result2: ${result2}`);

  return (
    <div className="App">
      <h1>Monkey Patching</h1>
      <h2>
        <p>
          Monkey Patching is the capability in JavaScript to swap out a function
          in a JavaScript object with your own function. This can come in handy,
          but also be dangerous. One of JavaScript's strengths is its ability to
          easily make changes to objects and modules. It also makes it fairly
          easy to introduce new bugs.
        </p>
        <p>
          This kind of functionality can also be found in languages like
          Objective-C and Swift where developers can swap out the functionality
          of methods in their classes using a runtime feature called 'Method
          Swizzling'.
        </p>

        <p>
          This kind of functionality can also be found in languages like
          Objective-C and Swift where developers can swap out the functionality
          of methods in their classes using a runtime feature called 'Method
          Swizzling'.
        </p>
      </h2>
      <img src={image} width={500} height={500} />
    </div>
  );
}
