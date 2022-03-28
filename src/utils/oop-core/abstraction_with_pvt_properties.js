//---------Abstracted----------
const x = 1;
const y = 7;
const z = 10;

const someComplexLogic = () => {
  return 45 * x + 50 * y + 70 * z;
};

const someComplexLogicAgain = () => {
  return 451 * x + 501 * y + 701 * z;
};

const calculate = () => {
  return someComplexLogic() + someComplexLogicAgain();
};
//-------------------------------------------------

class AbstractionDemo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //Simple interface exposed to the outside
  getResult() {
    return `Hi!, I am ${this.name} and ${
      this.age
    } years old, I got $${calculate()}`;
  }
}

const test = new AbstractionDemo("Nuwan", 40);
console.log(test.getResult());

export default test;
