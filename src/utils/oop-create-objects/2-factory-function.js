//Factory Function

function createCircle(radius, x, y) {
  console.log("XXXXXX", this);
  return {
    radius,
    position: {
      x,
      y,
    },
    draw: function () {
      console.log("YYYYYYY", this);
      console.log(
        `Draw radius ${this.radius} circle at (${this.position.x},${this.position.y})`
      );
    },
  };
}

const circle = createCircle(10, 1, 2);
circle.draw();

//'this' object  behave differently

/**
 *
 * function A(){
 *      this --> Refer GLOBAL object (if a browser then 'window' object)
 *   function B(){
 *      this ---> Refer to the object itself (nested function)
 *   }
 * }
 *
 */
