/**
 * Lets assume that to create an User, the Mandatory property is 'name'.
 * So as you can see in this example to create a user we have to explicitly pass
 * null for other optional parameters, age and phone.
 *
 * This is very ugly code
 *
 * As a solution we can apply builder design patterm to overcome this complexity
 */

/* class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Nuwan", null, null, new Address(100, "Main. st"));

export default user; */

/////// Applying Builder Pattern
/**
 * First ,create a user class with the mandatory properties
Second, create a Builder class for the user. Now we are not directly use User class to create
objects, instead we use builder class
Then for optional properties, we can i
 * 
 */

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(zip, street) {
    this.user.address = new Address(zip, street);
    return this;
  }

  build() {
    return this.user;
  }
}

export default UserBuilder;
