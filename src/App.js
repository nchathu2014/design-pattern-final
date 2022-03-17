/* import "./styles.css"; */
import image from "./images/hoc_pattern.JPG";

import Div from "./components/example-01/Div";
import withStyles from "./components/hoc/withStyles";
import StyledDiv from "./components/example-01/StyledDiv";

import User from "./components/example-02/User";
import withCurrentUser from "./components/hoc/withCurrentUser";

export default function App() {
  const MyDiv = withStyles(Div);

  const CurrentUser = withCurrentUser(User);

  return (
    <div className="App">
      <h1>HOC Design Pattern</h1>
      <Div title={"I am a button"} />
      <MyDiv title={"I am a styled one"} />
      <StyledDiv title={"I am another styled Div"} />
      <hr style={{ width: 5 }} />
      <User
        user={{
          name: "Nuwan",
          username: "uchatnu",
          email: "nuwan.thuduwage@gmail.com",
        }}
      />
      <hr />
      <CurrentUser userId={1} />
      <CurrentUser userId={2} />
      <h2>
        <p>
          Within our application, we often want to use the same logic in
          multiple components. This logic can include applying a certain styling
          to components, requiring authorization, or adding a global state.
        </p>

        <p>
          One way of being able to reuse the same logic in multiple components,
          is by using the higher order component pattern. This pattern allows us
          to reuse component logic throughout our application.
        </p>

        <p>
          A Higher Order Component (HOC) is a component that receives another
          component. The HOC contains certain logic that we want to apply to the
          component that we pass as a parameter. After applying that logic, the
          HOC returns the element with the additional logic.
        </p>
      </h2>
      <img src={image} width={1000} height={250} />
    </div>
  );
}
