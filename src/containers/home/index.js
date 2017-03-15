import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";

@connect(state => state)

class Home extends Component {

    componentWillMount(){
        console.log('Home')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Helmet title="Home Page"/>
                    <p>Home</p>
            </div>
        )
    }
}

export default Home
