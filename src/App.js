import "./styles.css";
import image from "./images/open_closed_principle.JPG";
import image1 from "./images/open_closed_principle_1.JPG";

import Quiz from "./utils/open_close";

export default function App() {
  const questions = [
    {
      type: "boolean",
      description: "This video is useful",
    },
    {
      type: "multipleChoice",
      description: "What is your faviorite language",
      options: ["CSS", "JS", "HTML", "Python"],
    },
    {
      type: "text",
      description: "Describe your faviorite JS feature",
    },
    {
      type: "range",
      description: "What is the speed limit in your city?",
    },
  ];

  const { quiz, boolean, mcq, text, range } = Quiz;

  const questions_new = [];

  boolean.setQuestion(questions[0]);
  questions_new.push(boolean);

  mcq.setQuestion(questions[1]);
  questions_new.push(mcq);

  text.setQuestion(questions[2]);
  questions_new.push(text);

  range.setQuestion(questions[3]);
  questions_new.push(range);

  quiz.printQuestions(questions_new);

  return (
    <div className="App">
      <h1>Software Design Principles - SOLID</h1>
      <h2>
        O - Open/ Closed Principle
        <p>Classes should be open for extenstion but closed for modification</p>
        <p style={{ color: "red" }}>
          The main idea of this principle is to keep existing code from breaking
          when you implement new features.
        </p>
        <p>
          This principle isn’t meant to be applied for all changes to a class.
          If you know that there’s a bug in the class, just go on and fix it;
          don’t create a subclass for it. A child class shouldn’t be responsible
          for the parent’s issues.
        </p>
      </h2>
      <img src={image} width={700} height={800} />
      <img src={image1} width={700} height={800} />
    </div>
  );
}
