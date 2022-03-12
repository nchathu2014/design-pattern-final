class Address {
  constructor(zip = "123", street = "456") {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

export default { User, Address };
