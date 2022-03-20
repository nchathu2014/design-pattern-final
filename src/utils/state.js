class State {
  constructor() {
    this.states = {
      red: {
        name: "RED_STATE",
        message: "Red ---> for 1 minitue",
        time: 1000,
        nextState: "green",
      },
      green: {
        name: "GREEN_STATE",
        message: "Green --> for 3 minute",
        time: 3000,
        nextState: "yellow",
      },
      yellow: {
        name: "YELLOW_STATE",
        message: "Yellow --> for 6 seconds",
        time: 6000,
        nextState: "red",
      },
    };
  }
}

class TrafficLight {
  constructor(state) {
    this.state = state;
    this.defaultState = this.state.states.red;
  }

  start() {
    this.change(this.defaultState);
  }
  change(state) {
    const currState = state;
    const nextState = this.state.states[state.nextState];

    console.log(currState);

    setTimeout(() => {
      this.change(nextState);
    }, nextState.time);
  }
}
const state = new State();
const tl = new TrafficLight(state);
tl.start();
