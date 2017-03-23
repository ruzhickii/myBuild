import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import getStyles from "./styles";
import {ResumeTitle} from "../../components";

@connect(state => state)

class Resume extends Component {

    componentWillMount() {
        console.log('Resume')
    }

    render() {
        const styles = getStyles(this.context);

        return (
            <div className="animated bounce">
                <Helmet title="Resume Page"/>
                <div>
                    <ResumeTitle />
                </div>
            </div>
        )
    }
}

export default Resume
