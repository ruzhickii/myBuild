import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";

@connect(state => state)

class Home extends Component {

    componentWillMount(){
        console.log('About')
    }

    render() {
        return (
            <div className="animated hinge">
                <Helmet title="About"/>
                <p>About</p>
            </div>
        )
    }
}

export default Home
