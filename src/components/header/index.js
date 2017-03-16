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
                       <IndexLink style={styles.link} activeClassName={'active'} to={'/'}>
                           Home
                       </IndexLink>
                       <Link activeClassName={'active'} to={'/about'}>
                           About
                       </Link>
                   </div>
                </nav>
            </header>
        )
    }
}

export default Header;