/* class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  add(valueToAdd) {
    this.value = this.value + valueToAdd;
  }
  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
} */

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const recentCommand = this.history.pop();
    this.value = recentCommand.undo(this.value);
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply;
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide;
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.value = valueToAdd;
  }

  execute(currValue) {
    return this.value + currValue;
  }

  undo(currValue) {
    return this.value - currValue;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.value = valueToSubtract;
  }

  execute(currValue) {
    return (this.value = currValue - this.value);
  }

  undo(currValue) {
    return (this.value = this.value + currValue);
  }
}

class AddAndThenSubtract {
  constructor(valAdd, valSub) {
    this.addCommand = new AddCommand(valAdd);
    this.subCommand = new SubtractCommand(valSub);
  }

  execute(currValue) {
    const newVal = this.addCommand.execute(currValue);
    return this.subCommand.execute(newVal);
  }

  undo(currValue) {
    const newVal = this.subCommand.execute(currValue);
    return this.addCommand.execute(newVal);
  }
}

export default new Calculator();
calculator.executeCommand(new AddCommand(50));
calculator.executeCommand(new SubtractCommand(10));
console.log(calculator.value);

//reset for testing
calculator.value = 0;

calculator.executeCommand(new AddAndThenSubtract(50, 10));
console.log(calculator.value);
/**
 * As you can see there are 4 commands in Calculator class as,
 * add(),subtract(), multiply() and divide()
 *
 * As per the definition of command pattern we have to ENCAPSULATE above
 * mentioned conmmands as DO and UNDO manner
 *
 * Do and Undo more useful in a situation like saving a user to a DB and if want,
 * in case of UNDO that operation
 *
 * So we have to get those commands out of the class and do the encapsulation.
 *
 * IMPORTANT: we can combine commands
 * Example:
 *
 * Instead of doing add() and subtraction() seperately, we can combine them into one
 * as addAndSubtraction()
 *
 * it is same as,
 * save(), exit() and save_and_exit() as three seperate functions, we can only create
 * save() and exit() and combind the commands as saveAndExit()
 */
