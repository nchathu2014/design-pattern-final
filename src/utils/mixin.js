class Dog {
  constructor(name) {
    this.name = name;
  }
}

//animal functionality mixin
const animalFucntionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

//dig functionality mixin
const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail"),
  play: () => console.log("Playing!"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(dogFunctionality, animalFucntionality);
Object.assign(Dog.prototype, dogFunctionality);

export default new Dog("Timmy");
