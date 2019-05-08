
import rules from './data.json';
import axios from 'axios'

export const RULES_LOADED = 'RULES_LOADED'
 
// Function that returns function
export const loadRules = () => async dispatch => {
    try {
        const response = await axios.get('/rest/rules');
        dispatch ({
            type: RULES_LOADED,
            payload: response.data
        })
    } catch(err) {
        console.log("RulesException", err);
    }
}

export const RULE_ADDED = 'RULE_ADDED';
export const addRule =   (rule, history) => async dispatch => {

    try {
       const response = await axios.post('/rest/rules', rule)
       console.log("Add Rule Response", response);

       dispatch ({
           type: RULE_ADDED,
           payload: response.data
       })

    } catch (err ) {
        console.log(err);
    }

    history.push("/")

}

export const RULE_UPDATED = 'RULE_UPDATED';
export const updateRule =   (rule, history) => async dispatch => {

    try {
       const response = await axios.post(`/rest/rule/${rule.id}`, rule)
       console.log("Update Rule Response", response);

       dispatch ({
           type: RULE_ADDED,
           payload: response.data
       })

    } catch (err ) {
        console.log(err);
    }

    history.push("/")

}