
import rules from './data.json';
import axios from 'axios'

export const RULES_LOADED = 'RULES_LOADED'
 
// Function that returns function
export const loadRules = () => dispatch => {
    try {
        const response = axios.get('/rest/rules');
        dispatch ({
            type: RULES_LOADED,
            payload: rules
        })
    } catch(err) {
        console.log("RulesException", err);
    }
}

console.log(rules);