import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";

class Navbar extends Component {
    logout(e){
        e.preventDefault();
        this.props.logout()
    }

    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <ul className="right">
                        <li><a href="/" onClick={this.logout.bind(this)}>خروج</a></li>
                        <li><NavLink to="/change_password">تغییر رمز عبور</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.auth.isLoggedIn,
        username: state.auth.username 
    }
}

export default connect(mapStateToProps,{logout})(Navbar);


