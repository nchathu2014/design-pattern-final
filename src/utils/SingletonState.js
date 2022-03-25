let instance = false;

class SingletonState {
  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  getInstance() {
    if (!instance) {
      console.log("Counter state initialized...");
      instance = true;
      return this;
    }

    throw new Error(
      "[ERROR]: Counter State unable to instanciate more than once"
    );
  }

  checkKeys(key) {
    const stateKey = Object.keys(this.state)[0];
    if (key === stateKey) return true;
    return false;
  }

  increment(key) {
    if (!this.checkKeys(key)) {
      throw new Error(`No such '${key}' found in the state`);
    }
    this.state[key]++;
  }

  decrement(key) {
    if (!this.checkKeys(key))
      throw new Error(`No such ${key} found in the state`);
    this.state[key]--;
  }
}

export default new SingletonState();
