import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import getStyles from "./styles";

@connect(state => state)

class NotFound extends Component {
    render() {
        const styles = getStyles(this.context);

        return (
            <section style={styles.root}>
                <Helmet title="Not Found"/>
                <div style={styles.imgBlock}><img style={styles.img} src={require('../../images/kosti.png')}
                                                  alt="image"/></div>
                <div style={styles.text}>ERROR 404 !!!</div>
                <div style={styles.text}>Page Not Found</div>
                <div style={styles.homeText}>Back to
                    <a style={styles.link} href="/">HOME</a>
                </div>
            </section>
        );
    }
}

export default NotFound
