//Abstractions
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  draw() {
    console.log(
      `Draw the  ${this.color.paint()} color circle of radius ${this.radius}`
    );
  }
}

class Square {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(
      `Draw the ${this.color.paint()} color square of width ${
        this.width
      } and height of ${this.height}`
    );
  }
}

//Implementor
class Red {
  paint() {
    return "Red";
  }
}

class Blue {
  paint() {
    return "Blue";
  }
}

const red = new Red();
const blue = new Blue();

//Red color circle and square
const circleRed = new Circle(10, red);
circleRed.draw();

const squareRed = new Square(10, 20, red);
squareRed.draw();

//Blue color circle and square
const circleBlue = new Circle(80, blue);
circleBlue.draw();

const squareBlue = new Square(60, 20, blue);
squareBlue.draw();
