class Gestures {
  constructor(output) {
    this.output = output;
  }
  tap() {
    this.output.click();
  }

  swipe() {
    this.output.move();
  }

  pan() {
    this.output.drag();
  }

  pinch() {
    this.output.zoom();
  }
}

class Mouse {
  constructor(output) {
    this.output = output;
  }
  click() {
    this.output.click();
  }

  move() {
    this.output.move();
  }

  down() {
    this.output.drag();
  }

  wheel() {
    this.output.zoom();
  }
}

//output
class Screen {
  click() {
    console.log("Screen Click");
  }

  move() {
    console.log("Screen Move");
  }

  drag() {
    console.log("Screen Drag");
  }

  zoom() {
    console.log("Screen Zoom");
  }
}

class Audio {
  click() {
    console.log("Audio Click");
  }

  move() {
    console.log("Audio Move");
  }

  drag() {
    console.log("Audio Drag");
  }

  zoom() {
    console.log("Audio Zoom");
  }
}

const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
