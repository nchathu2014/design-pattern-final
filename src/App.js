import "./styles.css";
import image from "./images/strategy_pattern.JPG";
import image1 from "./images/strategy_pattern_1.JPG";
import image2 from "./images/strategy_pattern_2.JPG";
export default function App() {
  return (
    <div className="App">
      <h1>Strategy Design Pattern</h1>
      <h2>
        <p>
          Strategy is a behavioral design pattern that lets you define a family
          of algorithms, put each of them into a separate class, and make their
          objects interchangeable.
        </p>

        <p>
          The Strategy pattern encapsulates alternative algorithms (or
          strategies) for a particular task. It allows a method to be swapped
          out at runtime by any other method (strategy) without the client
          realizing it. Essentially, Strategy is a group of algorithms that are
          interchangeable.
        </p>
        <p>
          In this example we have a product order that needs to be shipped from
          a warehouse to a customer. Different shipping companies are evaluated
          to determine the best price. This can be useful with shopping carts
          where customers select their shipping preferences and the selected
          Strategy returns the estimated cost.
        </p>
        <p>
          Shipping is the Context and the 3 shipping companies UPS, USPS, and
          Fedex are the Strategies. The shipping companies (strategies) are
          changed 3 times and each time we calculate the cost of shipping. In a
          real-world scenario the calculate methods may call into the shipper's
          Web service. At the end we display the different costs.
        </p>
      </h2>
      <img src={image} width={600} height={800} />
      <img src={image1} width={600} height={400} />
      <img src={image2} width={500} height={500} />
    </div>
  );
}
