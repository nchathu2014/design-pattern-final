//Here evenrthough getFullName is returned, it can access to the parent
//scope variable 'name'(eventhough it returned)

function ClosureDemo() {
  let name = "nuwan";

  const getFullName = function () {
    return "Chathuranga " + name;
  };

  return getFullName;
}

const name = ClosureDemo();
console.log(name());
