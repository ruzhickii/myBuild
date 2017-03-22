import React, {Component} from "react";
import {Link, IndexLink} from "react-router"
import getStyles from "./styles";


class Header extends Component {
    render() {
        const styles = getStyles(this.context);

        return (
            <header>
                <nav style={styles.navigation}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 animated slideInLeft">
                                <div style={styles.textAlign}>
                                    <h2 style={styles.nameTitle}>RUZHICKII ALEXANDER</h2>
                                    <span style={styles.position}>Front-End Developer</span>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 animated slideInRight">
                                <div style={styles.linkResume}>
                                    <IndexLink style={styles.link} activeClassName={'active'} to={'/'}>
                                        Resume
                                    </IndexLink>
                                </div>
                                <div style={styles.linkPortfolio}>
                                    <Link style={styles.link} activeClassName={'active'} to={'/about'}>
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;