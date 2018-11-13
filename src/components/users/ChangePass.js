import React, { Component } from 'react';
import axios from "axios/index";
import config from "../../config";
import {connect} from "react-redux";

class ChangePass extends Component {
    // constructor(){
    //     super();
    //     var errors = {};
    // }
    state = {
        old_password: '',
        password: '',
        password_confirm: ''
    };


    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    handleSubmit = e => {
        e.preventDefault();
        this.errors = {};
        if (!this.state.old_password) {
            this.errors.old_password = 'Required';
        }
        if (!this.state.password) {
            this.errors.password = 'Required';
        }
        if (!this.state.confirmpassword ) {
            this.errors.confirmpassword = 'Required' ;
        } else if (this.state.confirmpassword !== this.state.password) {
            this.errors.confirmpassword = 'Password mismatched' ;
            console.log('mismatch')
        }else{
            console.log(this.state);
            // axios.post(`${config.url}/change_password`,this.state)
            //     .then(response => {
            //         console.log(response.data);
            //     })
            //     .catch(error => {
            //         throw(error);
            //     });
        }
    };
    render() {
        return (
            <div className="container d-flex justify-content-center">
                    <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                        <p className="login-box-msg">{this.errors}</p>
                        <h5 className="grey-text text-darken-3">تغییر رمز عبور</h5>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="old_password" className="col-md-3 text-right">رمز عبور قدیم<span className="text-danger">*</span></label>
                            <input type="password"
                                   // onChange={this.handleChange}
                                   id="old_password"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   // value={this.state.old_password}
                            />
                        </div>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="password" className="col-md-3 text-right">رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   // onChange={this.handleChange}
                                   id="password"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   // value={this.state.password}
                            />
                        </div>
                        <div className="input-field d-flex mb-3">
                            <label htmlFor="password_confirm" className="col-md-3 text-right">تکرار رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   id="password_confirm"
                                   // onChange={this.handleChange}
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   // value={this.state.password_confirm}
                            />
                        </div>

                        <div className="input-filed">
                            <button className="btn pink lighten-1 z-depth-0">ذخیره</button>
                        </div>
                    </form>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token
    }
}
export default connect(mapStateToProps)(ChangePass);


