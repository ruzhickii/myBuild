import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import getStyles from "./styles";
import {Information} from "../../components";


@connect(state => state)

class Home extends Component {

    componentWillMount() {
        console.log('Home')
    }

    render() {
        const styles = getStyles(this.context);

        return (
            <div className="animated ">
                <Helmet title="Home Page"/>
                <Information />
            </div>
        )
    }
}

export default Home
