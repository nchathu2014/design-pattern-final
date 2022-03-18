import "./styles.css";
import image from "./images/abstract_factory.JPG";
import image1 from "./images/abstract_factory_1.JPG";
import image2 from "./images/abstract_factory_2.JPG";
import abf from "./utils/AbstractFactory";
import afs from "./utils/AbstractFactoryShop";

export default function App() {
  //Abstract Factory Products
  console.log(abf.create("empf", "Nuwan"));
  console.log(abf.create("venf", "Chathu"));
  console.log("-----------------------------------------");
  //Shop Abstract Factory Products
  console.log(afs.create("artdeco", "chair", "I am ArtDeco Chair"));
  console.log(afs.create("victorian", "chair", "I am Victorian Chair"));
  console.log(afs.create("modern", "chair", "I am Modern Chair"));

  return (
    <div className="App">
      <h1>Abstract Design Pattern</h1>
      <h2>
        Abstract Factory is a creational design pattern that lets you produce
        families of related objects without specifying their concrete classes.
      </h2>
      <img src={image} width={600} height={800} />
      <img src={image1} width={800} height={600} />
      <img src={image2} width={800} height={800} />
    </div>
  );
}
