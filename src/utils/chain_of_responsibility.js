class Handler {
  constructor(name, request) {
    this.name = name;
    this.successor = null;
    this.request = request;
  }
  setSuccessor(successor) {
    this.successor = successor;
  }

  handleRequest(request) {
    // console.log("---->", this.request, request);
    console.log(`Request ${this.request} received by ${this.name}`);

    if (this.request === request) {
      console.log(`[SUCCESS]: Request ${this.request} handled by ${this.name}`);
    } else {
      //console.log(`ss`);
      if (this.successor !== null) {
        console.log(
          `[MESSAGE]: Requst unable to resolve by ${this.name} and pass to the next handler ${this.successor.name} `
        );

        this.successor.handleRequest(request);
      } else {
        console.log(
          `[FAILED]: Request ${this.request} cannot resolved by ${this.name}`
        );
      }
    }

    /*     if (this.request === null) {
      this.request = request;
    }
    console.log("---->", this.request, request);
    console.log(`Request ${this.request} received by ${this.name}`);

    if (this.request === request) {
      console.log(`[SUCCESS]: Request ${this.request} handled by ${this.name}`);
    } else {
      this.successor.request = request;
      if (this.successor !== null) {
        console.log(
          `[MESSAGE]: Requst unable to resolve by ${this.name} and pass to the next handler ${this.successor.name} `
        );

        this.successor.handleRequest(request);
      } else {
        console.log(
          `[FAILED]: Request ${this.request} cannot resolved by ${this.name}`
        );
      }
    } */
  }
}

//Handlers

const handlerOne = new Handler("H1", "R1");
const handlerTwo = new Handler("H2", "R2");
const handlerThree = new Handler("H3", "R3");

//Chaining the Handlerers as H1 -> H2 -> H3
handlerOne.setSuccessor(handlerTwo);
handlerTwo.setSuccessor(handlerThree);

console.log("Requesting R1");
handlerOne.handleRequest("R1");

console.log("-------------------------------");

console.log("Requesting R2");
handlerOne.handleRequest("R2");

console.log("-------------------------------");

console.log("Requesting R3");
handlerOne.handleRequest("R3");

console.log("-------------------------------");

console.log("Requesting RX");
handlerOne.handleRequest("RX");
