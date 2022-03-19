//old interface
class Shipping {
  request(zipStart, zipEnd, weight) {
    //calculation logic using zipStart,zipEnd,weight
    return "$67.56";
  }
}

//new interface
class AdvancesShipping {
  login(credentials) {
    //login logic
    console.log(credentials);
  }

  setStart(start) {
    //set start logic
    //console.log(start);
  }

  setDestination(destination) {
    //set destination logic
    //console.log(destination);
  }

  calculate(weight) {
    //calculation logic
    console.log("WEIGHT: ", weight);
    return "$89.45";
  }
}

class ShppingAdapter {
  constructor(credentials) {
    this.adapter = new AdvancesShipping();
    this.credentials = credentials;
  }

  request(zipStart, zipEnd, weight) {
    this.adapter.login(this.credentials);
    this.adapter.setStart(zipStart);
    this.adapter.setDestination(zipEnd);
    return this.adapter.calculate(weight);
  }
}

const shipping = new Shipping();
const old_cost = shipping.request();
console.log("OLD COST: ", old_cost);

const credentials = { token: "30a8-6ee1" };
const adapter = new ShppingAdapter(credentials);
const new_cost = adapter.request("78701", "10010", "2 lbs");
console.log("NEW COST", new_cost);
