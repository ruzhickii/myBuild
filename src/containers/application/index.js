import React, {Component} from "react";
import {connect} from "react-redux";
import {Header,Footer, Content} from '../../components'

@connect(state => state)

class RootPortal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
               <section className="animated fadeIn">
                   <Header  {...this.props}/>
                   <Content {...this.props}/>
                   <Footer  {...this.props}/>
               </section>

        )
    }

}

export default RootPortal
