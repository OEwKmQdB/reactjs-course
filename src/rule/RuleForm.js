
import React, {Component} from 'react'
import {compose} from 'redux'
import RuleTitleField from './RuleTitleField';
import RuleDescriptionField from './RuleDescriptionField';
import PropTypes from 'prop-types'
import {connect} from 'react-redux' 
import { Field, reduxForm } from 'redux-form' 
import { addRule, updateRule } from '../rules-actions'

// FormReducer is part of redux
 class RuleForm extends Component {


    onSubmit = formValues => {
        console.log("Submit", formValues)
        const {id} = this.props.rule;
        const {addRule, updateRule, history} = this.props
        console.log("Submit", this.props);
        const submitAction = id ? updateRule : addRule; 
        submitAction(formValues, history)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
           <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">New rule</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <Field name ="title" component={RuleTitleField} />
                        <Field name ="description" component={RuleDescriptionField} />
                        <button type="submit" className="btn btn-primary pull-right">Submit</button>
                            
                        
                    </form>
                </div>
           </div>

        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title!"
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors
}
 
const mapStateToProps = (state, ownProps) => {
    try {
        const id = Number(ownProps.match.params.id);
        
        console.log("RuleForm mapStateToProps state", state);
        console.log("RuleForm mapStateToProps ownProps", ownProps);
        const {rules} = state;

        const rule = rules.find( rule => rule.id === id)
        const ret = {
            rule: id === undefined ? rules : rule,
            initialValues: id === undefined ? rules : rule
        };
        console.log("RuleForm mapStateToProps return ", ret)
        return ret
    } catch (err) {
        return {
            rule: {},
            initialValues: {}
        }
    }
}

RuleForm.defaultProps = {
    rule: {}
}

export default compose(
        connect(
            mapStateToProps,
            { addRule, updateRule }
        ), reduxForm({
            form: 'rule',
            validate
        })
    )(RuleForm);
    