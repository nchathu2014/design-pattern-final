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

const circle = Circle;

//iterate
for (let key in circle) {
  console.log(key, circle[key]);
}

//Get all object keys
console.log(Object.keys(circle));

//Check a key

if ("radius" in circle) {
  console.log(`'radius' is a key`);
}
