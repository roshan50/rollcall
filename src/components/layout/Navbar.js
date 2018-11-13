import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import Tooltip from '@material-ui/core/Tooltip';
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";


class Navbar extends Component {
    logout(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <ul className="nav d-flex justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={this.logout.bind(this)}>
                                <Tooltip title="خروج">
                                    <MaterialIcon icon="power_settings_new" color='#796173' />
                                </Tooltip>
                            </a>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" to="/change_password">تغییر رمز عبور</NavLink></li>
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


