import "./styles.css";
import image from "./images/proxy_pattern.JPG";
import coin from "./utils/proxy_as_a_cache";
import proxyPerson from "./utils/proxy";
import proxyPersonReflect from "./utils/proxy_with_reflect";

export default function App() {
  const getBitCoin = () => {
    console.log(coin.getCoinData("Bitcoin"));
  };

  const getLiteCoin = () => {
    console.log(coin.getCoinData("Litecoin"));
  };

  const getDogCoin = () => {
    console.log(coin.getCoinData("Dogcoin"));
  };

  const displayProxy = () => {
    console.log("----Proxy----");
    proxyPerson.name;
    proxyPerson.name = "Nuwan Chathuranga";
  };

  const displayProxyReflect = () => {
    console.log("----- Proxy with Reflect ---------");
    proxyPersonReflect.age;
    proxyPersonReflect.age = 40;
  };

  return (
    <div className="App">
      <h1>Proxy Design Pattern</h1>
      <h2>
        With a Proxy we can get more control over the interactions with certain
        object. We are not directly communicate with the target object, instead
        Proxy will do. Building "Validation Libraries" and "Caching Machanisms",
        we can use Proxys.
      </h2>
      <img src={image} width={1200} height={300} />
      <hr />
      <h3>
        Only calling to the API at first fetch, afterwords getting data from the
        cache (proxy)
      </h3>
      <button onClick={getBitCoin}>Bitcoin</button>
      <button onClick={getLiteCoin}>Litecoin</button>
      <button onClick={getDogCoin}>Dogcoin</button>
      <hr />
      <h3>Using Javascript inbuilt Proxy Object and using Reflect method</h3>
      <button onClick={displayProxy}>Proxy Object</button>
      <button onClick={displayProxyReflect}>Proxy Object with Reflect</button>
    </div>
  );
}
