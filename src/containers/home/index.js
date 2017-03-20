import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import getStyles from "./styles";

@connect(state => state)

class Home extends Component {

    componentWillMount() {
        console.log('Home')
    }

    render() {
        const styles = getStyles(this.context);

        return (
            <div className="animated bounce">
                <Helmet title="Home Page"/>
                <div style={styles.title}>
                    <p>Home</p>
                    <div style={styles.imgBlock}><img style={styles.img} src={require('../../images/kosti.png')}
                                                      alt="image"/></div>
                    <div style={styles.imgBlock}><img style={styles.img} src={require('../../images/kosti.png')}
                                                      alt="image"/></div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default Home
