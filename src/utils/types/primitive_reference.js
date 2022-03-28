/**
 * Value Types (Primitives) Vs Reference Types
 *
 * Primitive - String, Number, Boolean, Symbol, null, undefined
 * Reference - Object, Function, Array
 *
 *
 * CONCLUSION:
 *
 * Primitives are COPIED by their value
 *
 * Objects are COPIED by their reference
 */

//Primitives are COPIED by their value
let x = 10;
let y = x;

x = 100;

console.log("x: ", x);
console.log("y: ", y);

//Objects are COPIED by their reference
let p = { value: 10 };
let q = p;

p.value = 100;

console.log("p: ", p);
console.log("q: ", q);

//-------------------

let number = 10;

function increment(number) {
  number++;
}

increment(number);

console.log("number: ", number);

//----------------------

let obj = { value: 10 };

function increment(obj) {
  obj.value++;
}

increment(obj);

console.log("value: ", obj.value);
