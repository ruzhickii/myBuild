import '../assets'

import React, {Component} from 'react';
import {Router, browserHistory} from "react-router";
import {render} from 'react-dom';
import {Provider} from "react-redux";

import routes from "./routes";
import configureStore from "./store";

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes(store)} onUpdate={() => window.scrollTo(0, 0)}/>
            </Provider>
        )
    }
}

render(<Root/>, document.getElementById('app'));