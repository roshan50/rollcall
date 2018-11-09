import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllUsers} from "../../store/actions/userActions";
import List from "../utils/List";

class UserList extends Component{
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    UserList(){
        const heads = ['ایمیل', 'نام', 'شناسه','نوع', 'مدیر ارشد', 'مدیر مستقیم']
        if(this.props.users['users'] instanceof Array){
            console.log('user list')
            console.log(this.props.users['users'])
            return <List items={this.props.users['users']} heads={heads}/>;
        }
    }
    render() {
        console.log('render')
        console.log(this.UserList())
        console.log('render prop')
        console.log(this.props.users)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2 mr-md-5">
                        <NavLink className="btn btn-info" to='/new/users'>جدید</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mr-md-5">
                        {this.UserList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllUsers : () => dispatch(fetchAllUsers())
    }
}
const mapStateToProps = (state)=>{
    return{
        users :  state.users
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);