import "./styles.css";
import observerImg from "./images/observer_pattern_1.JPG";
import observable from "./utils/observer";

import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

function logger(data) {
  //console.log(`${Date.now()}-${data}`);
  console.log(JSON.stringify(data));
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  //console.log(observable);

  function handleClick() {
    observable.notify({
      user: "NUWAN",
      datetime: Date.now(),
      type: "ON_CLICK",
      component: "BUTTON",
      message: "Click the Button",
    });
  }

  function handleOnChange() {
    observable.notify({
      user: "NUWAN",
      datetime: Date.now(),
      type: "ON_CHANGE",
      component: "TOGGLE BUTTON",
      message: "Toggled the Button",
    });
  }

  return (
    <div className="App">
      <div>
        <h1>Observer Pattern</h1>
        <h2>Use observables to notify subscribers when an event occurs</h2>
        <img src={observerImg} width={900} height={500} />
      </div>
      <hr />
      <div>
        <Button onClick={handleClick}>Click Me!</Button>
        {"  "}
        <FormControlLabel
          control={<Switch />}
          label="Toggle Me!"
          onChange={handleOnChange}
        />
        <ToastContainer />
      </div>
    </div>
  );
}
