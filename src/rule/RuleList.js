import React, {Component} from 'react'; 
import Rule from './Rule';
import './../Rule.css';
import { connect } from 'react-redux';
import { loadRules } from '../rules-actions';

class RuleList extends Component {

    componentDidMount() { 
        // When component is generated and attached to DOM
        // 'loadRules' gotten from 'connect()' below 
        this.props.loadRules();
        console.log(this.props);
    }
 
    render() {
        // this works because props gotten from state (from store)
        const {rules} = this.props
        console.log("Rules", rules); 
        const newRules = rules.map( rule => {
           return <Rule key={rule.id} rule={rule} />
        });
        return newRules; 
    }


}

// state from redux-reducer
const mapStateToProps = state => {
    return {
        rules: state.rules
    }
}

// this.props.rules will work

const wrapped = connect(
    mapStateToProps,
    {loadRules} // pass in object
);

export default wrapped(RuleList); 
