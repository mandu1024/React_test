import React, { Component, PropTypes } from 'react';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Value extends Component {



    render() {
        return(
            <div>
                {this.props.number}
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;