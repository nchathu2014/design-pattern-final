class Developer {
  constructor(name) {
    this.name = name;
    this.type = "developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = " tester";
  }
}

class EmployeeFactory {
  // developer = 1, tester = 2
  create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
        break;

      default:
        return new Tester(name);
        break;
    }
  }
}

export default new EmployeeFactory();
