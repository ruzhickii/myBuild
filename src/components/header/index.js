import React, {Component} from "react";
import {Link, IndexLink} from "react-router"
import getStyles from "./styles";

class Header extends Component {
    render() {
        const styles = getStyles(this.context);

        return (
            <header>
                <nav style={styles.title}>
                    <div>
                        <ul>
                            <li>
                                <IndexLink style={styles.link} activeClassName={'active'} to={'/'}>
                                    Home
                                </IndexLink>
                            </li>
                            <li>
                                <Link style={styles.link} activeClassName={'active'} to={'/about'}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;