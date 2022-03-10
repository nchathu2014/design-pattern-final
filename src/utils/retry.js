async function retryOperation() {
  let currentTry = 0;
  while (true) {
    try {
      externalServiceCall();
      console.log("Succeeded!");
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);
      if (currentTry >= 3) {
        console.log(`Retry maximum reached. Exiting`);
        break;
      }
    }
    await sleep(3000);
  }
}

//Immediate retry
function externalServiceCall() {
  console.log(`Calling external service`);
  const shouldPass = Math.random() < 0.3;
  if (shouldPass) {
    return true;
  } else {
    throw "Error";
  }
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export default retryOperation;
