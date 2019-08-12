import React from 'react';
import './App.css';
import {Switch,Route,withRouter} from 'react-router-dom'
import Home from "./components/Home";
import Child from './components/Child';
function App({match}) {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/:id' component={Child} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
