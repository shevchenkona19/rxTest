import React from "react";
import PropTypes from "prop-types";

export default class Label extends React.Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
};