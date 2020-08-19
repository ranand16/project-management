import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReleaseDetails from "./components/ReleaseDetails"
import Releases from "./components/Releases"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path = '' component = {Releases} exact = {true}/>
        <Route path = '/releases' component = {Releases} exact = {true}/>
        <Route path = '/releasedetails' component = {ReleaseDetails} exact = {true} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
