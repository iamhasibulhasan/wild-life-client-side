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
import Login from "./components/Auth/Login/Login";
import RegisterPhotographer from "./components/Auth/RegisterPhotographer/RegisterPhotographer";
import Dashboard from "./components/Auth/Admin/Dashboard/Dashboard";
import AuthProvider from "./contexts/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='*'>
            <Header></Header>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
