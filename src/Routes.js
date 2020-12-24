// import React, {Component} from "react";
// import {Switch, Router} from "react-router-dom";
// import AuthContainer from "./containers/authContainers/AuthContainer";


// const Routes = ()=>(
//     <Switch>
//         <Route exact path="/" component={AuthContainer}/>
//     </Switch>    
// )
//  export default Routes;

 import React, {Component} from "react";
 import { Switch, Route } from "react-router-dom";
 import AuthContainer from "./containers/authContainers/AuthContainer";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AuthContainer} />
  </Switch>
);

export default Routes;