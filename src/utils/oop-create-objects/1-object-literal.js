const Circle = {
  radius: 1,
  position: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log(
      `Draw radius ${this.radius} circle at (${this.position.x},${this.position.y})`
    );
  },
};

Circle.draw();
