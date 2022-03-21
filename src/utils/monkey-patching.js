class SimpleMathObject {
  add(a, b) {
    return a + b;
  }
}

const mathObj = new SimpleMathObject(10, 20);
const result = mathObj.add(10, 20);
console.log(`result1: ${result}`);

// Make a copy of the original add function
const originalAdd = mathObj.add;

// Making Monkey Patch

mathObj.add = (a, b) => {
  console.log(`Adding the result of ${a} and ${b}`);
  return originalAdd(a, b);
};
const result2 = mathObj.add(10, 20);
console.log(`result2: ${result2}`);
