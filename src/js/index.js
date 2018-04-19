import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';
import { auth } from './rebase';

import App from './App';

const renderApp = (user) => {
  ReactDOM.render(<App user={user} />, document.getElementById('app'));
};

const handleAuthStateChanged = (user) => {
  if (user) {
    console.log('Authenticated with', user.displayName);
  }

  renderApp(user);
};

auth.onAuthStateChanged(handleAuthStateChanged);
