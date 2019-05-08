
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class RuleDescriptionField extends Component {
    render() {
      const {desc, input} =  this.props;
        return (
          <div className="form-group">
              <label htmlFor="rule-desc">Description</label>
              <textarea
              {...input}
                className="form-control"
                id="rule-desc" 
                defaultValue={desc}
                placeholder="Description" />
            </div>

        )
    }
}


RuleDescriptionField.defaultProps = {
  description: ""
};