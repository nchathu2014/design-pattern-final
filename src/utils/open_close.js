//Original Code
/* 
class Quiz {
    constructor() {
      this.questions = [];
    }
  
    printQuestions(questions) {
      questions.forEach((question) => {
        console.log(question.description);
        switch (question.type) {
          case "boolean":
            console.log("1. True");
            console.log("2. False");
            break;
  
          case "multipleChoice":
            question.options.forEach((option, index) => {
              console.log(`${index + 1}. ${option}`);
            });
            break;
  
          case "text":
            console.log("Answer: ______________");
            break;
        }
      });
    }
  } */

// Modified Code
// Now the Quiz class is open for extension by adding new question types
// But close for any modification at the same time
// To add a new type of question, you no need to touch the printQuestions() logic
// but as you can see in the original code, we have to add a new case to cater the
// new type

class Quiz {
  constructor() {
    this.questions = [];
  }

  printQuestions(questions) {
    this.questions = questions;
    this.questions.forEach((question) => {
      console.log(question.description);
      question.print();
    });
  }
}

class Boolean {
  setQuestion(question) {
    this.type = question.type;
    this.description = question.description;
  }

  print() {
    console.log(this.description);
    console.log("1. True");
    console.log("2. False");
  }
}

class MCQ {
  setQuestion(question) {
    this.type = question.type;
    this.description = question.description;
    this.options = question.options;
  }

  print() {
    console.log(this.description);
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }

  constructor(question) {}
}

class Text {
  setQuestion(question) {
    this.type = question.type;
    this.description = question.description;
  }

  print() {
    console.log(this.description);
    console.log("Answer: ______________");
  }
}

class Range {
  setQuestion(question) {
    this.type = question.type;
    this.description = question.description;
  }

  print() {
    console.log("Maximum: ______________");
    console.log("Minimum: ______________");
  }
}

const quiz = new Quiz();
const boolean = new Boolean();
const text = new Text();
const range = new Range();
const mcq = new MCQ();
export default { quiz, boolean, mcq, text, range };
