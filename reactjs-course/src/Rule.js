import React from 'react'

import LikeBtn from './LikeBtn';

class Rule extends React.Component {

    state = { folded: false  };

    constructor(props) {
        super(props);
        this.onLikeBtnClick = this.onLikeBtnClick.bind(this);
    }

    toggle = () => {
        this.setState({folded: !this.state.folded});
    }

    onLikeBtnClick = (v) => {
        console.log("onlikebtnclicked " + v);
        if ((v == 1 && this.state.value == -1) || (v == -1 && this.state.value == 1)) {
            this.setState({value: v});
        }
    }

    render() {

        const {rule } = this.props;
        const { folded } = this.state;
        const { title, description, tags, likes, dislikes } = rule;

        const cssFolded = folded || !description ? "up" : "down";
        
        return ( 

            <div className="panel panel-primary">
                <div className="panel-heading" role="presentation">
                    {title}
                    <i onClick={this.toggle} className={`pull-right glyphicon glyphicon-chevron-${cssFolded}`}></i>
                </div>
                <div className="panel-body" hidden={folded || !description}>
                    <p>{description}</p>
                </div>
                <div className="panel-footer">
                    <div className="btn-toolbar">
                    { tags.map( tag => <span className="badge">{tag}</span> )}

                    <div className="btn-group btn-group-xs pull-right">
                        <a className="btn btn-primary" title="Update">
                        <i className="glyphicon glyphicon-pencil"></i>
                        </a>
                    </div>
                    <div className="btn-group btn-group-xs pull-right">
                        <LikeBtn onBtnClick={ () => this.onLikeBtnClick(1) } counter={likes} rule={rule} type="up" />
                        <LikeBtn onBtnClick={ () => this.onLikeBtnClick(-1)} counter={dislikes} rule={rule} type="down" />
                        
                    </div>
                    </div>
                </div>
            </div>
            
        );

    }

}

export default Rule;