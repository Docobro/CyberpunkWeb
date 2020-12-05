import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollTopArrow from './components/ScrollTopArrow';
import Header from './components/header';
import Background from './components/background';
import Overview from './components/overview';
import Requirements from './components/requiremets';
import Release from './components/release';
import List from './components/list'

function App() {
  return (
    <Router>
        <div className="main">
        <Header/>
        <Background/>
        <ScrollTopArrow/>
        <List/>

        <Switch>
          <Route path= {"/Overview"}>
            <Overview/>
          </Route>
          <Route path={"/Requiremets"}>
            <Requirements/>
          </Route>
          <Route  path={"/Release"}>
            <Release/>
          </Route>
        </Switch>
         </div>
    </Router>
  );
}

export default App