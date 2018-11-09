import React, {Component} from 'react';
import {login} from "../../store/actions/authActions";
import {connect} from "react-redux";

class SignIn extends Component {
    state={
        username : '',
        password : '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.props.history.push('/');
        // console.log(this.props);
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="login-box bg-light">
                        <div className="login-box-body">
                            <p className="login-box-msg"></p>

                           <form action="" onSubmit={this.handleSubmit} className="white form-validate">
                               <h5 className="grey-text text-darken-3">ورود</h5>
                               <div className="input-field ">
                                   <label htmlFor="username">نام کاربری</label>
                                   <input type="text" onChange={this.handleChange} id="username" className='form-control email-validate'/>
                               </div>

                               <div className="input-field  ">
                                   <label htmlFor="password">رمز عبور</label>
                                   <input type="password" onChange={this.handleChange} id="password" className='form-control field-validate'/>
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
        login: (data) => dispatch(login(data)),
    }
}

export default connect(null,mapDispatchToProps)(SignIn);
