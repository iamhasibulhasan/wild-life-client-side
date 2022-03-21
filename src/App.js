import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from './components/NotFound/NotFound';
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
