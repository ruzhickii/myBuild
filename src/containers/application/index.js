import React, {Component} from "react";
import {connect} from "react-redux";
import {Header,Footer} from '../../components'

@connect(state => state)

class RootPortal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <section>{this.props.children}</section>
                <Footer />
            </div>
        );
    }

}

export default RootPortal
