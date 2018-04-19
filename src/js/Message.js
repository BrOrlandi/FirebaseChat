import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { message } = this.props;

    const date = (new Date(message.timestamp)).toLocaleTimeString();

    return (
      <div className="chat-message">
        <figure className="image is-48x48">
          <img className="user-info__photo" src={message.userPhoto} alt={message.userName} />
        </figure>
        <div className="chat-message__content">
          <span className="chat-message__user-name">
            {message.userName}
            <span className="chat-message__timestamp"> ({date})</span>
          </span>
          <span className="chat-message__message">{message.message}</span>
        </div>
      </div>
    );
  }
}

export default Message;
