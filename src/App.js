import "./styles.css";
import image from "./images/builder_pattern.JPG";
import image1 from "./images/builder_pattern_1.JPG";
import image2 from "./images/builder_pattern_2.JPG";
import image3 from "./images/builder_pattern_3.JPG";

import UserBuilder from "./utils/builder_traditional_approach";
import UserJS from "./utils/builder_javascript_approach";

import House from "./utils/builder_house";

export default function App() {
  console.log("---------------- Traditional approach -------------");
  console.log(
    new UserBuilder("Nuwan")
      .setAge(39)
      .setPhone("7890")
      .setAddress(1, "Main st.")
      .build()
  );

  console.log(new UserBuilder("Nuwan").setAddress(1, "Green st.").build());

  console.log("---------------- The JS approach -------------");
  const { User, Address } = UserJS;
  console.log(new User("Dasuni", { address: new Address("123", "Main St.") }));
  console.log(new User("Dasuni", { age: 39, phone: "111111" }));

  console.log("---------------- House Scenario -------------");
  console.log(new House(10, 6, 3));
  console.log(
    new House(10, 6, 3, {
      hasSwimPool: true,
      hasGarden: true,
      hasGarage: true,
    })
  );
  console.log(new House(1, 2, 3, { hasStatues: true }));
  return (
    <div className="App">
      <h1>Builder Design Pattern</h1>
      <h2>
        Builder is a creational design pattern that lets you construct complex
        objects step by step. The pattern allows you to produce different types
        and representations of an object using the same construction code.
      </h2>
      <img src={image} width={500} height={500} />
      <img src={image1} width={500} height={500} />
      <img src={image2} width={500} height={500} />
      <img src={image3} width={500} height={500} />
    </div>
  );
}
