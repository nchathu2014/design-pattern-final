class Employee {
  constructor(name) {
    this.name = name;
    this.type = "employee";
  }

  say() {
    console.log(`I am employee ${this.name}`);
  }
}

class Vendor {
  constructor(name) {
    this.name = name;
    this.type = "vendor";
  }

  say() {
    console.log(`I am vendor ${this.name}`);
  }
}

class EmployeeFactory {
  create(name) {
    return new Employee(name);
  }
}

class VendorFactory {
  create(name) {
    return new Vendor(name);
  }
}

class AbstractFactory {
  constructor() {
    this.empf = new EmployeeFactory();
    this.vendf = new VendorFactory();
  }

  create(factory, name) {
    switch (factory) {
      case "empf":
        return this.empf.create(name);

      case "venf":
        return this.vendf.create(name);
    }
  }
}

export default new AbstractFactory();
