import React, {Component, PropTypes} from "react";
import getStyles from "./styles";

class Footer extends Component {

    render() {
        const styles = getStyles(this.context);

        return (
            <footer>
                <div style={styles.title}>
                    Its our FOOTER !
                </div>
            </footer>
        )
    }
}

export default Footer
