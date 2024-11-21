import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div>
        <Notifications
          displayDrawer={this.state.displayDrawer}  // Step 5: Pass the state as a prop
          handleDisplayDrawer={this.handleDisplayDrawer}  // Step 6: Pass methods as props
          handleHideDrawer={this.handleHideDrawer}
        />
      </div>
    );
  }
}

export default App;

