//Constructor Function

function Circle(radius, x, y) {
  console.log("XXXXXX", this);

  this.radius = radius;
  this.x = x;
  this.y = y;

  this.draw = function () {
    console.log("YYYYYY", this);
    console.log(`Draw radius ${this.radius} circle at (${this.x},${this.y})`);
  };
}

const circle = new Circle(10, 2, 1);
circle.draw();

//'this' object  behave differently

/**
 *
 * function A(){
 *      this --> Refer the empty object of Circle {}, coz of 'new' key word
 *      if you remove 'new' then it will refer the 'window' object
 *   function B(){
 *      this ---> Refer to the object itself (nested function)
 *   }
 * }
 *
 */
