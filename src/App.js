import "./styles.css";
import image from "./images/factory_pattern.JPG";
import employeeFactory from "./utils/factory";

export default function App() {
  const employees = [];
  employees.push(
    employeeFactory.create("Nuwan", 1),
    employeeFactory.create("Dasuni", 1),
    employeeFactory.create("John", 2)
  );

  console.log(employees);
  return (
    <div className="App">
      <h1>Factory Design Pattern</h1>
      <h2>
        Use a factory function/object in order to create objects. Object
        creation logic is reside in the factory. Then object creation is in a
        centralized location
      </h2>
      <img src={image} width={1400} height={500} />
      <hr />
    </div>
  );
}
