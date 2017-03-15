import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";

@connect(state => state)

class NotFound extends Component {
    render() {
        return (
            <section>
                <Helmet title="Not Found"/>
                <div>404 Not Found Page</div>
            </section>
        );
    }
}

export default NotFound
