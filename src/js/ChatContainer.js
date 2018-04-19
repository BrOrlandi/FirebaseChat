import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Chat from './Chat';
import SendMessage from './SendMessage';

class ChatContainer extends Component {
  render() {
    return (
      <div className="chat-container">
        <UserInfo />
        <Chat />
        <SendMessage />
      </div>
    );
  }
}

export default ChatContainer;
