/**
 * A good example for mediator design pattern is a chat room. Users are the components and chat room itself is the mediator object.
 *
 */

class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName();
    const sendTime = new Date().toLocaleString();
    const chatMessage = `${sendTime}-[${sender}]: ${message}`;
    console.log(chatMessage);
    return chatMessage;
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

export default {
  ChatRoom,
  User,
};
