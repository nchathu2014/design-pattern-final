class Shipping {
  constructor() {
    this.company = null;
  }

  setStrategy(company) {
    this.company = company;
  }

  calculateCost(package1) {
    return this.company.calculate(package1);
  }
}

// Different strategies as UPS, USPS, Fedex
class UPS {
  calculate(package1) {
    // calculation logic for UPS
    return "$45.95";
  }
}

class USPS {
  calculate(package1) {
    // calculation logic for USPS
    return "$39.40";
  }
}

class Fedex {
  calculate(package1) {
    // calculation logic for Fedex
    return "$43.20";
  }
}
const package1 = {
  from: "76712",
  to: "10012",
  weigth: "lkg",
};

// the 3 strategies
const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: ", shipping.calculateCost(package1));

shipping.setStrategy(usps);
console.log("USPS Strategy: ", shipping.calculateCost(package1));

shipping.setStrategy(fedex);
console.log("Fedex Strategy: ", shipping.calculateCost(package1));
