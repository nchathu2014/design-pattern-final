//Using Object.create(), we can explicitly pass the value its prototype

const dog = {
  bark() {
    return "BARK!";
  },
};

export default Object.create(dog);
