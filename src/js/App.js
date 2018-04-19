import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import ChatContainer from './ChatContainer';
import Signup from './Signup';

class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <NavBar />
        <section className="section">
          <div className="container">
            {!user && <Signup />}
            {user && <ChatContainer />}
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
};

export default App;
