import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import {connect} from "react-redux";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard"
import SignIn from "./components/auth/SignIn";
import UserList from "./components/users/UserList";
import CalendarList from "./components/calendars/CalendarList";
import CreateCalendar from "./components/calendars/CreateCalendar";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              { this.props.auth ? <Navbar/> : <div></div>}
              { this.props.auth ? <Sidebar/> : <div></div>}
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/login" component={SignIn} />
                  <Route path="/users" component={UserList} />
                  <Route path="/calendars" component={CalendarList} />
                  <Route path="/calendars/new" component={CreateCalendar} />
                  <Route path="/timesheet" component={CalendarList} />
                  <Route path="/offices" component={CalendarList} />
                  <Route path="/config" component={CalendarList} />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth.isLoggedIn,
    }
}

export default connect(mapStateToProps)(App);
