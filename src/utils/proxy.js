const person = {
  name: "Nuwan",
  age: 39,
  nationality: "Sri Lankan",
};

const proxyPerson = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Change the value of ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

export default proxyPerson;
