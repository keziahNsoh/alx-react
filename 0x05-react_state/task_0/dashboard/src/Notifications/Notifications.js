import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifications extends Component {
  // Step 7: Define propTypes and defaultProps
  static propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        <button onClick={handleDisplayDrawer}>Your notifications</button>
        {displayDrawer && (
          <div className="notifications">
            <button onClick={handleHideDrawer}>Close</button>
            <p>Here are your notifications</p>
          </div>
        )}
      </div>
    );
  }
}

export default Notifications;

