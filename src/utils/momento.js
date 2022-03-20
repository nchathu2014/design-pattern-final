class Person {
  constructor(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  //Serialized
  hydrate() {
    const memento = JSON.stringify(this);
    return memento;
  }

  //De-Serialized
  dehydrate(memento) {
    const m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

/**
 * responsible for storing mementos
just a repository; does not make changes to mementos
 */
class CareTaker {
  constructor() {
    this.mementos = {};
  }

  store(key, memento) {
    this.mementos[key] = memento;
  }

  restore(key) {
    return this.mementos[key];
  }
}

const nuwan = new Person("Nuwan", "Street 1", "City 1", "State 1");
const dasuni = new Person("Dasuni", "Street 2", "City 2", "State 2");

const caretaker = new CareTaker();

//Save state
caretaker.store(1, nuwan.hydrate());
caretaker.store(2, dasuni.hydrate());

//Update names
nuwan.name = "Alter Nuwan";
dasuni.name = "Alter Dasuni";

console.log(nuwan.name);
console.log(dasuni.name);

//Restore original state
nuwan.dehydrate(caretaker.restore(1));
dasuni.dehydrate(caretaker.restore(2));

console.log(nuwan.name);
console.log(dasuni.name);
