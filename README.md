# Strategy Design Pattern

Strategy is a behavioral design pattern that lets you define a
family of algorithms, put each of them into a separate class,
and make their objects interchangeable.

The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

In this example we have a product order that needs to be shipped from a warehouse to a customer. Different shipping companies are evaluated to determine the best price. This can be useful with shopping carts where customers select their shipping preferences and the selected Strategy returns the estimated cost.

Shipping is the Context and the 3 shipping companies UPS, USPS, and Fedex are the Strategies. The shipping companies (strategies) are changed 3 times and each time we calculate the cost of shipping. In a real-world scenario the calculate methods may call into the shipper's Web service. At the end we display the different costs.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/strategy/src/images/strategy_pattern.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/strategy/src/images/strategy_pattern_1.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/strategy/src/images/strategy_pattern_2.JPG?raw=true)
