class Coin {
  getCoinData(coin) {
    console.log("Calling to API....", coin);
    switch (coin) {
      case "Bitcoin":
        return "USD 1000";
        break;
      case "Litecoin":
        return "USD 500";
        break;
      case "Dogcoin":
        return "USD 100";
        break;
    }
  }
}

class ProxyCoin extends Coin {
  constructor() {
    super();
    this.cache = {};
  }

  getCoinData(coin) {
    // we can define a different method name other than getCoinData()
    // check coin availability in the cache
    const isCoin = this.cache[coin];

    if (!isCoin) {
      const coinData = super.getCoinData(coin);
      this.cache[coin] = coinData;
    }
    return this.cache[coin];
  }
}

export default new ProxyCoin();
