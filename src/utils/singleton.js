let instance = null;
let count = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("Cannot instantiate more than one");
    }
    instance = this;
  }

  increment() {
    count++;
  }

  decrement() {
    count--;
  }

  getCount() {
    return count;
  }

  setCount(val) {
    count = val;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
