var x = 1000;
const prodeduralFn = (function (x) {
  var a = 10;
  var b = 20;
  var c = 30;

  var sum = function () {
    return a + b + c + x;
  };

  return sum;
})(x);

export default prodeduralFn;
