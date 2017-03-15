import React from "react";
import {IndexRoute, Route} from "react-router";
import {Application, Home, NotFound, About} from "../containers";

function AppRoutes() {
    return(
        <Route path="/" component={Application}>
            <IndexRoute component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    )
}

export default AppRoutes;
