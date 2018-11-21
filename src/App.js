import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard"
import SignIn from "./components/auth/SignIn";
import UserList from "./components/users/UserList";
import CreateUser from "./components/users/CreateUser";
import UpdateUser from "./components/users/UpdateUser";
import ShowUser from "./components/users/ShowUser";
import ChangePass from "./components/users/ChangePass";
import CalendarList from "./components/calendars/CalendarList";
import CreateCalendar from "./components/calendars/CreateCalendar";
import UpdateCalendar from "./components/calendars/UpdateCalendar";
import OfficeList from "./components/offices/OfficeList";
import ConfigList from "./components/configs/ConfigList";
import Timesheet from "./components/timesheet/Timesheet";
import UpdateConfig from "./components/configs/UpdateConfig";
import CreateOffice from "./components/offices/CreateOffice";
import UpdateOffice from "./components/offices/UpdateOffice";
import Page404 from "./components/layout/Page404";

class App extends Component {
    render() {
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth ? <Component {...props} /> : <Redirect to='/login' />
            )} />
        )

        return (
            <BrowserRouter>
                <div className="App">
                    { this.props.auth ? <Navbar/> : ''}
                    { this.props.auth ? <Sidebar/> : ''}
                    <Switch>
                        <Route path="/login" component={SignIn} />
                        <PrivateRoute path="/change_password" component={ChangePass} />
                        <PrivateRoute path="/users" component={UserList} />
                        <PrivateRoute path="/new/users" component={CreateUser} />
                        <PrivateRoute path="/edit/user/:id" component={UpdateUser} />
                        <PrivateRoute path="/show/user/:id" component={ShowUser} />
                        <PrivateRoute path="/calendars" component={CalendarList} />
                        <PrivateRoute path="/new/calendars" component={CreateCalendar} />
                        <PrivateRoute path="/edit/calendar/:id" component={UpdateCalendar} />
                        <PrivateRoute path="/timesheet" component={Timesheet} />
                        <PrivateRoute path="/offices" component={OfficeList} />
                        <PrivateRoute path="/new/offices" component={CreateOffice} />
                        <PrivateRoute path="/edit/office/:id" component={UpdateOffice} />
                        <PrivateRoute path="/configs" component={ConfigList} />
                        <PrivateRoute path="/edit/config/:id" component={UpdateConfig} />
                        <PrivateRoute path='/' component={Dashboard} />
                        <PrivateRoute component={Page404} />
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
