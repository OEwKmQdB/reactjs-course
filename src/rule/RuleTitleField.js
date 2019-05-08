
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class RuleTitleField extends Component {


    renderError = ({error, touched}) => {
        console.log(" Touched " , touched);
        if (touched && error) {
            return (
                <div>{error}</div>
            );
        }
    }

    render() {
        const {title, input, meta} = this.props;
        console.log("Title props " , this.props);
        return (
            <div className="form-group">
                <label htmlFor="rule-title">Title</label>
                <input
                {...input}
                type="text"
                className="form-control"
                id="rule-title"
                defaultValue={title}
                placeholder="Title"
                />
                {this.renderError(meta)}
            </div>

        )
    }
}

RuleTitleField.defaultProps = {
    title: ""
};