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
import OfficeList from "./components/offices/OfficeList";
import ConfigList from "./components/configs/ConfigList";
import Timesheet from "./components/timesheet/Timesheet";
import ChangePass from "./components/users/ChangePass";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    { this.props.auth ? <Navbar/> : ''}
                    { this.props.auth ? <Sidebar/> : ''}
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={SignIn} />
                        <Route path="/change_password" component={ChangePass} />
                        <Route path="/users" component={UserList} />
                        <Route path="/calendars" component={CalendarList} />
                        <Route path="/calendars/new" component={CreateCalendar} />
                        <Route path="/timesheet" component={Timesheet} />
                        <Route path="/offices" component={OfficeList} />
                        <Route path="/config" component={ConfigList} />
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
