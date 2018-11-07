import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchAllUsers} from "../../store/actions/userActions";
// import List from "../utils/List";

class UserList extends Component{
    componentDidMount(){
        this.props.fetchAllUsers();
        // console.log(this.props.users)
    }

    render() {
        // console.log(this.fetchAllUsers())

        return (
            <div className="user-list section">
                <ul>
                    {this.props.users && this.props.users.length > 0 && this.props.users.map(row => <li key={row.id}>{row.year}</li>)}
                </ul>
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


