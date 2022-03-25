class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }
}

const rec = new Rectangle(10, 20);
rec.setWidth(50);

console.log("A1: ", rec.area());
