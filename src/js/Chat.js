import React, { Component } from 'react';
import { label } from './chat-app';

class Chat extends Component {
  render() {
    return (
      <div className='chat'>
        <div className='textarea chat-messages'>
          { label.chatExample }
        </div>
        <div className='input-message'>
          <input
            className='input'
            type='text'
            placeholder={ label.messagePlaceholder }
          />
          <div className='button is-dark'>
            { label.send }
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
