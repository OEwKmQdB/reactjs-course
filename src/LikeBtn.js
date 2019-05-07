
import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { doLike, doDislike } from './likes-actions'

class LikeBtn extends React.Component { 

    // no longer needed 
    //state = { counter: this.props.counter, toggleValue: 0 };

    isUp() {
        const { type } = this.props;
        return type === "up";
    }
    
    toggle = (ev) => {
        
        const {id, likes, dislikes } = this.props.rule
        if ((this.isUp() && likes <= 0) || (!this.isUp() && dislikes <= 0)) {
            const {type, doLike, doDislike} = this.props
            this.isUp() ? this.props.doLike(id) : this.props.doDislike(id);
        }
        /*
        console.log("Toggle");
        ev.preventDefault();
        this.setState({counter: this.state.counter + 1});
        *///this.props.onLikeBtnClick(this.props.type);
    }

    render( ) {

        const {  type, onLikeBtnClick } = this.props;
        const {likes, dislikes} = this.props.rule;
        const counter  = this.isUp() ? likes : dislikes; // this.state;
 
        const title = type === "up" ? "+1" : "-1"; 

        return (
            <a onClick={this.toggle} className="btn btn-default" title={title}>
               {counter} <i className={`glyphicon glyphicon-thumbs-${type}`}></i>
            </a>
        );
    }

}

LikeBtn.defaultProps = {
    counter: 0
}

LikeBtn.propTypes = {
    type: PropTypes.oneOf(['up', 'down']).isRequired,
    counter: PropTypes.number
}

export default connect(
    null, // no state
    { doLike, doDislike }
)(LikeBtn);
 