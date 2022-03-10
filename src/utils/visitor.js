class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(sal) {
    this.salary = sal;
  }

  /** access to visitor function */
  accept(visitorFn) {
    visitorFn(this);
  }
}

export default Employee;
