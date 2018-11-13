import React, {Component} from 'react';
import {login} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
    state={
        name : '',
        password : '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state,this.props.history);
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="login-box bg-light">
                        <div className="login-box-body">
                           <form action="" onSubmit={this.handleSubmit} className="white form-validate">
                               <p className="login-box-msg text-danger">{this.props.msg}</p>
                               <h5 className="grey-text text-darken-3">ورود</h5>
                               <div className="input-field ">
                                   <label htmlFor="name">نام کاربری</label>
                                   <input type="text" onChange={this.handleChange} id="name" className='form-control email-validate' required/>
                               </div>

                               <div className="input-field  ">
                                   <label htmlFor="password">رمز عبور</label>
                                   <input type="password" onChange={this.handleChange} id="password" className='form-control field-validate' required/>
                               </div>

                               <div className="input-filed">
                                   <button className="btn btn-primary btn-block btn-flat">ورود</button>
                               </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        login: (data,history) => dispatch(login(data,history)),
    }
}
const mapStateToProps = (state)=>{
    return{
        msg : state.auth.msg,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
