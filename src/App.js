import "./styles.css";
import image from "./images/visitor_pattern.JPG";
import Employee from "./utils/visitor";

export default function App() {
  const employee = new Employee("Nuwan", 10000);
  console.log("SALARY: ", employee.getSalary());

  //Visitor function => modify the salary using
  function extraSalary(emp) {
    const salary = emp.getSalary();
    emp.setSalary(salary * 2);
  }

  employee.accept(extraSalary);
  console.log("EX-SALARY: ", employee.getSalary());
  return (
    <div className="App">
      <h1>Visitor Design Pattern</h1>
      <h2>
        Add or provide new operation or methods to an object without changing
        that object itself. the new functionality and logic kept ina seperate
        object, known as the visitor object. Visitor pattern useful for
        extending some library or framework. receiver object have a accept()
        function which allows visitor object to change the functionality.
      </h2>
      <img src={image} width={1200} height={500} />

      <hr />
    </div>
  );
}
