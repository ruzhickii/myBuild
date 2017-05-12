import '../assets'

import React, {Component} from 'react';
import {Router, browserHistory} from "react-router";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import routes from "./routes";
import configureStore from "./store";

const store = configureStore();
injectTapEventPlugin();
class Root extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                        <Router history={browserHistory} routes={routes(store)} onUpdate={() => window.scrollTo(0, 0)}/>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

render(<Root/>, document.getElementById('app'));