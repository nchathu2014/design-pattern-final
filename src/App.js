import "./styles.css";
import image from "./images/test.jpg";
export default function App() {
  return (
    <div className="App">
      <h1>Flyweight Design Pattern</h1>
      <h2>
        <p>
          Reuse existing instances when working with identical objects. The
          flyweight pattern is a useful way to conserve memory when we're
          creating a large number of similar objects.
        </p>{" "}
        <p>
          In our application, we want users to be able to add books. All books
          have a title, an author, and an isbn number! However, a library
          usually doesn't have just one copy of a book: it usually has multiple
          copies of the same book.
        </p>{" "}
        <p>
          It wouldn't be very useful to create a new book instance each time if
          there are multiple copies of the exact same book. Instead, we want to
          create multiple instances of the Book constructor, that represent a
          single book.
        </p>
        <p>
          The flyweight pattern is useful when you're creating a huge number of
          objects, which could potentially drain all available RAM. It allows us
          to minimize the amount of consumed memory.
        </p>
        <p>
          In JavaScript, we can easily solve this problem through prototypal
          inheritance. Nowadays, hardware has GBs of RAM, which makes the
          flyweight pattern less important.
        </p>
      </h2>
      <img src={image} width={500} height={500} />
    </div>
  );
}
