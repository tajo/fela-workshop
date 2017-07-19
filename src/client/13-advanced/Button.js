import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
