import React, { Component } from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component {
    componentDidMount(){
        // if(!this.props.auth){
        //     this.props.history.push('/login');
        // }
        console.log(this.props.auth)
    }

    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col offset-m4">
                        <div>{ this.props.username } خوش آمدید!</div>
                    </div>
                </div>
            </div>
           );
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.auth.isLoggedIn,
        username: state.auth.username,
    }
}

export default connect(mapStateToProps)(Dashboard);


