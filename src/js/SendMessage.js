import React, { Component } from 'react';

class SendMessage extends Component {
  render() {
    return (
      <div className="input-message">
        <input
          className="input"
          type="text"
          placeholder="Write your message..."
        />
        <div className="button is-dark">
          Send
        </div>
      </div>
    );
  }
}

export default SendMessage;