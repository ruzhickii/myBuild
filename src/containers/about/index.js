import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import getStyles from "./styles";

@connect(state => state)

class Home extends Component {

    componentWillMount() {
        console.log('About')
    }

    render() {
        const styles = getStyles(this.context);

        return (
            <div className="animated flip">
                <div style={styles.title}>
                    <Helmet title="About Page"/>
                    <p>About</p>
                    <div>
                        Hello page about
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
