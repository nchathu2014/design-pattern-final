/**
 * Single Responsibility Principle
 *
 * A class should be one reason to change.
 *
 * As you can see this original code 'CalorieTracker' violate
 * the Single Responsibility Principle.
 *
 * If we have to change the calorie tracking logic, we have to
 * modify/change the function trackCalories(). It is fine.
 *
 * But,
 *
 * If we want to change the logging the results, we have to change/modify
 * the function logCalorieSurplus(). This is NOT fine.
 *
 * Solution-We can remove function logCalorieSurplus() from the CalorieTracker and import to it
 */

import logMessage from "./logger";

//Original code
/* class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log("Max calories exceeded!!!");
  }
}

const ct = new CalorieTracker(2000);
ct.trackCalories(500);
ct.trackCalories(1000);
ct.trackCalories(800); */

//Modified code

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Exceed calaries");
    }
  }
}

const ct = new CalorieTracker(2000);
export default ct;
