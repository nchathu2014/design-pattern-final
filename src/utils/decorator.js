class User {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`Hi!, I am ${this.name}`);
  }
}

class DecorateUser {
  constructor(user, street, city) {
    this.street = street;
    this.city = city;
    this.user = user;
  }

  say() {
    console.log(
      `Hi!, I am ${this.user.name}, I live in ${this.street}, ${this.city}`
    );
  }
}

const user = new User("Nuwan");
user.say();

const decoUser = new DecorateUser(user, "Kicthiner", "Ontario");
decoUser.say();
