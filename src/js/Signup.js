import React, { Component } from 'react';
import firebase from 'firebase/app';
import { auth } from './rebase';

class Signup extends Component {
  _handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  render() {
    return (
      <div className="box center">
        <h1 className="title">Welcome to Firebase Chat</h1>
        <button onClick={this._handleSignIn} className="button is-large is-primary">Login</button>
      </div>
    );
  }
}

export default Signup;
