import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllUsers} from "../../store/actions/userActions";
import List from "../utils/List";

class UserList extends Component{
    componentDidMount(){
        this.props.fetchAllUsers(this.props.token);
    }
    UserList(){
        const heads = ['نام', 'ایمیل','نوع', 'مدیر ارشد', 'مدیر مستقیم']
        if(this.props.users['users'] instanceof Array){
            var users = this.props.users['users'];
            users.map(function(obj,i) {
                delete obj['profile']
                delete obj['setting']
                delete obj['created_at']
                delete obj['updated_at']
                delete obj['deleted_at']
                delete obj['chief_id']
                delete obj['direct_id']
                return obj;
            });
            // console.log(users);
            return <List items={users} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 justify-content-start mb-4 mt-4 mb-4 mt-4">
                        <NavLink className="btn btn-info" to='/new/users'>جدید</NavLink>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="bg-light">
                        {this.UserList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllUsers : (token) => dispatch(fetchAllUsers(token))
    }
}
const mapStateToProps = (state)=>{
    return{
        users : state.users,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);