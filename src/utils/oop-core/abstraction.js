class AbstractionDemo {
  constructor(name, age) {
    this.x = 1;
    this.y = 7;
    this.z = 10;
    this.name = name;
    this.age = age;
  }

  //Complex logics abstracted
  someComplexLogic() {
    return 45 * this.x + 50 * this.y + 70 * this.z;
  }

  someComplexLogicAgain() {
    return 451 * this.x + 501 * this.y + 701 * this.z;
  }

  calculate() {
    return this.someComplexLogic() + this.someComplexLogicAgain();
  }

  //Simple interface exposed to the outside
  getResult() {
    return `Hi!, I am ${this.name} and ${
      this.age
    } years old, I got $${this.calculate()}`;
  }
}

//This will reduce the impact of change. Think if wer want to change the logic of complex
//functions. But we do not need to chnage the getResult() method
const test = new AbstractionDemo("Nuwan", 40);
console.log(test.getResult());

//Object.preventExtensions(test);
//Object.freeze(test);

//test.name = "SSSSS";

//console.log(test);
