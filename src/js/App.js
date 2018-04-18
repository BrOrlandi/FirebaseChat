import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Chat from './Chat';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        {JSON.stringify(this.props.user)}
        <Chat />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
};

export default App;
