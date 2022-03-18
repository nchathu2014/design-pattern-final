// Products

class Chair {
  constructor(name) {
    this.name = name;
    this.type = "chair";
  }
}

class Sofa {
  constructor(name) {
    this.name = name;
    this.type = "sofa";
  }
}

class CoffeeTable {
  constructor(name) {
    this.name = name;
    this.type = "coffee_table";
  }
}

//ConcreteFactory

class ArtDecoFactory {
  create(type, name) {
    switch (type) {
      case "chair":
        return new Chair(name);
      case "sofa":
        return new Sofa(name);
      case "coffee_table":
        return new CoffeeTable(name);
    }
  }
}

class VictorianFactory {
  create(type, name) {
    switch (type) {
      case "chair":
        return new Chair(name);
      case "sofa":
        return new Sofa(name);
      case "coffee_table":
        return new CoffeeTable(name);
    }
  }
}

class ModernFactory {
  create(type, name) {
    switch (type) {
      case "chair":
        return new Chair(name);
      case "sofa":
        return new Chair(name);
      case "coffee_table":
        return new Chair(name);
    }
  }
}

//Abstract factory

class AbstractFactoryShop {
  constructor() {
    this.artdeco = new ArtDecoFactory();
    this.victorian = new VictorianFactory();
    this.modern = new ModernFactory();
  }

  create(factory, type, name) {
    switch (factory) {
      case "artdeco":
        return this.artdeco.create(type, name);
      case "victorian":
        return this.victorian.create(type, name);
      case "modern":
        return this.modern.create(type, name);
    }
  }
}

export default new AbstractFactoryShop();
