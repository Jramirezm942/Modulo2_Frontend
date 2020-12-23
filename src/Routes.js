import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import AuthContainer from "./containers/authContainers/AuthContainer";


const Routes = ()=>(
    <Switch>
        <Route exact path="/" />
    </Switch>    
)
 export default Routes;
