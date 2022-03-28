class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }
}

const circle = new Circle(1);
circle.radius = 100;
console.log("R: ", circle.radius);
