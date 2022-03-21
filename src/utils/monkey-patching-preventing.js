class SimpleMathObject {
  add(a, b) {
    return a + b;
  }
}

const smo = new SimpleMathObject();
export default Object.freeze(smo);
