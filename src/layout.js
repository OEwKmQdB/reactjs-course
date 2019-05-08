
import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './Header'
import RuleList from "./rule/RuleList"
import RuleForm from './rule/RuleForm.js'

export default class Layout extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <Route exact path ="/" component={RuleList} /> 
                    <Route path ="/new" component={RuleForm} /> 
                    <Route path ="/edit/:id" component={RuleForm} /> 
                </div>
            </div>
            </div>
        )
    }
}