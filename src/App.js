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
import ChangePass from "./components/users/ChangePass";
import CalendarList from "./components/calendars/CalendarList";
import CreateCalendar from "./components/calendars/CreateCalendar";
import OfficeList from "./components/offices/OfficeList";
import ConfigList from "./components/configs/ConfigList";
import Timesheet from "./components/timesheet/Timesheet";
import UpdateConfig from "./components/configs/UpdateConfig";
import CreateOffice from "./components/offices/CreateOffice";
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
                    {/*<Navbar/>*/}
                    {/*<Sidebar/>*/}
                    <Switch>
                        <Route path="/login" component={SignIn} />
                        <PrivateRoute path="/change_password" component={ChangePass} />
                        <PrivateRoute path="/users" component={UserList} />
                        <PrivateRoute path="/new/users" component={CreateUser} />
                        <PrivateRoute path="/edit/user/:id" component={UpdateUser} />
                        <PrivateRoute path="/calendars" component={CalendarList} />
                        <PrivateRoute path="/new/calendars" component={CreateCalendar} />
                        <PrivateRoute path="/edit/calendar/:id" component={CreateCalendar} />
                        <PrivateRoute path="/timesheet" component={Timesheet} />
                        <PrivateRoute path="/offices" component={OfficeList} />
                        <PrivateRoute path="/new/offices" component={CreateOffice} />
                        <PrivateRoute path="/edit/office/:id" component={CreateOffice} />
                        <PrivateRoute path="/config" component={ConfigList} />
                        <PrivateRoute path="/edit/config/:id" component={UpdateConfig} />
                        <PrivateRoute path='/' component={Dashboard} />
                        <PrivateRoute component={Page404} />
                    </Switch>
                    {/*<Switch>*/}
                        {/*<Route path="/login" component={SignIn} />*/}
                        {/*<Route path="/change_password" component={ChangePass} />*/}
                        {/*<Route path="/users" component={UserList} />*/}
                        {/*<Route path="/new/users" component={CreateUser} />*/}
                        {/*<Route path="/edit/users/:id" component={CreateUser} />*/}
                        {/*<Route path="/calendars" component={CalendarList} />*/}
                        {/*<Route path="/new/calendars" component={CreateCalendar} />*/}
                        {/*<Route path="/edit/calendars/:id" component={CreateCalendar} />*/}
                        {/*<Route path="/timesheet" component={Timesheet} />*/}
                        {/*<Route path="/offices" component={OfficeList} />*/}
                        {/*<Route path="/new/offices" component={CreateOffice} />*/}
                        {/*<Route path="/edit/offices/:id" component={CreateOffice} />*/}
                        {/*<Route path="/config" component={ConfigList} />*/}
                        {/*<Route path="/edit/config/:id" component={UpdateConfig} />*/}
                        {/*<Route path='/' component={Dashboard} />*/}
                        {/*<Route component={Page404} />*/}
                    {/*</Switch>*/}
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
