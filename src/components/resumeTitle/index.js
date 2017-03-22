import React, {Component} from "react";
import getStyles from "./styles";

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
                                <span style={styles.textHome}>Home</span>
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