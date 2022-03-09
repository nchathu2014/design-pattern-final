import "./styles.css";
import { useState } from "react";
import ChatRoomMediator from "./utils/mediator";
import image from "./images/mediator_pattern.JPG";

export default function App() {
  const { ChatRoom, User } = ChatRoomMediator;
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");

  const chatroom = new ChatRoom();

  const user1 = new User("Nuwan", chatroom);
  const user2 = new User("Dasuni", chatroom);

  function handleClickUser1() {
    user1.send(userOne);
  }

  function handleClickUser2() {
    user2.send(userTwo);
  }

  function handleOnChangeUser1(event) {
    setUserOne(event.target.value);
  }

  function handleOnChangeUser2(event) {
    setUserTwo(event.target.value);
  }

  return (
    <div className="App">
      <h1>Mediator/ Middleware Design Pattern</h1>
      <h2>
        Use a central mediator object to handle communication between components
      </h2>
      <img src={image} width={1200} height={500} />
      <hr />
      <input type={"text"} onChange={handleOnChangeUser1} />
      <button onClick={handleClickUser1}>{"SEND MESSAGE"}</button>
      {`    `}
      <input type={"text"} onChange={handleOnChangeUser2} />
      <button onClick={handleClickUser2}>{"SEND MESSAGE"}</button>
    </div>
  );
}
