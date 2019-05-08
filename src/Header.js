
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {


    render () {
        return (

            <div className="navbar navbar-default" role="navigation">
            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                    
                        </button>
                        <Link to="/" className="navbar-brand brand">Developers Rules</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/"> Home</Link></li>
                        <li><Link to="/new">New</Link></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}