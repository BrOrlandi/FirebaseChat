import React, { Component } from 'react';
import firebase from 'firebase';
import rebase, { auth } from './rebase';

class SendMessage extends Component {
  constructor() {
    super();
    this.message = React.createRef();
  }
  _handleSendMessage = (e) => {
    e.preventDefault();

    const message = this.message.current.value;
    const user = auth.currentUser;

    const messageData = {
      message,
      userName: user.displayName,
      userPhoto: user.photoURL,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    rebase.push('/messages', { data: messageData });

    this.message.current.value = '';
  }

  render() {
    return (
      <form onSubmit={this._handleSendMessage} className="send-message">
        <input ref={this.message} className="input" placeholder="Write your message..." autoFocus type="text" />
        <button className="button is-dark">
          Send
        </button>
      </form>
    );
  }
}

export default SendMessage;