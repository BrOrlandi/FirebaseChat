import React, { Component } from 'react';
import rebase from './rebase';

import Message from './Message';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.chatMessages = React.createRef();

    rebase.bindToState('/messages', {
      context: this,
      state: 'messages',
      asArray: true,
      queries: {
        orderByChild: 'timestamp',
        limitToLast: 50,
      },
    });
  }

  componentDidUpdate() {
    const box = this.chatMessages.current;
    box.scrollTop = box.scrollHeight;
  }

  _renderMessages = () => (
    this.state.messages.map(message => (
      <Message key={message.key} message={message} />
    ))
  )

  render() {
    return (
      <div ref={this.chatMessages} className="chat-box box">
        {this._renderMessages()}
      </div>
    );
  }
}

export default Chat;
