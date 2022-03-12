class House {
  constructor(
    windows,
    doors,
    rooms,
    { hasGarage, hasSwimPool, hasStatues, hasGarden } = {}
  ) {
    this.windows = windows;
    this.doors = doors;
    this.rooms = rooms;
    this.hasGarage = hasGarage;
    this.hasSwimPool = hasSwimPool;
    this.hasStatues = hasStatues;
    this.hasGarden = hasGarden;
  }
}

export default House;
