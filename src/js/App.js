import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        {JSON.stringify(this.props.user)}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
};

export default App;
