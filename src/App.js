import "./styles.css";
import image from "./images/iterator_pattern.JPG";
import image1 from "./images/iterator_pattern_1.JPG";
import image2 from "./images/iterator_pattern_2.JPG";
import image3 from "./images/iterator_pattern_3.JPG";
import image4 from "./images/iterator_pattern_4.JPG";

export default function App() {
  return (
    <div className="App">
      <h1>Iterator Design Pattern Final</h1>
      <h2>
        Iterator is a behavioral design pattern that lets you traverse elements
        of a collection without exposing its underlying representation (list,
        stack, tree, etc.).
        <p>
          The Iterator object maintains a reference to the collection and the
          current position. It also implements the 'standard' Iterator interface
          with methods like: first, next, hasNext, reset, and each.
        </p>
        <p>
          Two looping methods are used: a built-in for loop and a newly created
          each method. The for loop uses the first, hasNext, and next methods to
          control the iteration. The each method does internally exactly the
          same (i.e. runs a for loop), but to the client the syntax has been
          greatly simplified.
        </p>
      </h2>
      <img src={image} width={600} height={800} />
      <img src={image1} width={500} height={200} />
      <img src={image2} width={500} height={200} />
      <img src={image3} width={600} height={600} />
      <img src={image4} width={600} height={400} />
    </div>
  );
}
