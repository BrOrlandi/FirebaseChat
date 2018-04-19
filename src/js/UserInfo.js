
import React, { Component } from 'react';
import { auth } from './rebase';

class UserInfo extends Component {
  _handleSignout = () => {
    auth.signOut();
  }

  render() {
    const user = auth.currentUser;

    return (
      <div className="user-info box">
        <div className="user-info__user">
          <figure className="image">
            <img className="user-info__photo" src={user.photoURL} alt={user.displayName} />
          </figure>
          <h1 className="subtitle">{user.displayName}</h1>
        </div>
        <button onClick={this._handleSignout} className="button is-danger">Logout</button>
      </div>
    );
  }
}

export default UserInfo;
