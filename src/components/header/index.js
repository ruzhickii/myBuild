import React, {Component} from "react";
import {Link, IndexLink} from "react-router"

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <nav>
                            <IndexLink activeClassName={'active'} to={'/'}>
                               Home
                            </IndexLink>
                            <Link activeClassName={'active'} to={'/about'}>
                                About
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;