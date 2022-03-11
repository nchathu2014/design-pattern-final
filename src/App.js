import "./styles.css";
import image from "./images/prototype_pattern.JPG";
import Dog from "./utils/prototype";
import DogExplicit from "./utils/prototype_explicit";

export default function App() {
  const dog1 = new Dog("Tin");
  const dog2 = new Dog("Ton");
  const dog3 = new Dog("Bin");

  console.log(dog1);
  console.log(dog2);
  console.log(dog3);

  //We can use either Dog.prototype OR Dog.__proto_

  Dog.prototype.play = () => "Play";
  Dog.prototype.color = null;

  Dog.prototype.setColor = (color) => (Dog.prototype.color = color);
  Dog.prototype.getColor = () => Dog.prototype.color;

  dog1.setColor("Brown");
  console.log(dog1.name, dog1.getColor(), dog1.bark(), dog1.play());

  console.log("===============================");

  console.log(DogExplicit.__proto__.bark());
  return (
    <div className="App">
      <h1>Prototype Design Pattern</h1>
      <h2>Share properties among many objects of the same type</h2>
      <img src={image} width={800} height={500} />
      <div>
        Using Object.create(), we can explicitly pass the value its prototype
      </div>
    </div>
  );
}
