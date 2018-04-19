import React, { Component } from 'react';

class Chat extends Component {

  _renderMessages = () => {
    return "blaaaa";
  }

  render() {
    return (
      <div className="chat-box box">
        {this._renderMessages()}
      </div>
    );
  }
}

export default Chat;
