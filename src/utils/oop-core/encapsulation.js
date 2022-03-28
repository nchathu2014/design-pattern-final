/* let baseSalary = 30000;
let overtime = 10;
let rate = 20;

const getWage = () => {
  return baseSalary + overtime * rate;
};

console.log(getWage()); */

//OOP conversion

class Salary {
  constructor(baseSalary, overtime, rate) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;
  }

  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  }
}

//Object Literal Notation

const SalaryAgain = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

const sal = new Salary(30000, 10, 20);
console.log("Class Based: ", sal.getWage());
console.log("Object Literal: ", SalaryAgain.getWage());
