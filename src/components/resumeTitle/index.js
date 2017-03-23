import React, {Component} from "react";
import getStyles from "./styles";
import {Link} from "react-router"

class ResumeTitle extends Component {

    render() {
        const styles = getStyles(this.context);

        return (
            <section style={{margin: "10"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6"><span style={styles.title}>Resume</span></div>
                        <div className="col-xs-12 col-md-6"><span style={styles.text}>"FEWS THINGS THAT MAKE YOU SHOULD WORK WITH ME"</span></div>
                        <div className="col-xs-12 col-md-12">
                            <div style={{width: "145px", float: "left"}}>
                                <Link style={{textDecoration: "none"}} to={"/"}><span style={styles.textHome}>Home</span></Link>
                                <span style={styles.textResume}> - Resume</span>
                            </div>
                            <div style={styles.line}></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ResumeTitle;