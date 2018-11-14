import React, { Component } from 'react';
import axios from "axios/index";
import config from "../../config";
import {connect} from "react-redux";

class ChangePass extends Component {
    state = {
        old_password: '',
        password: '',
        password_confirm: '',
        msg : ''
    };


    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        console.log(this.state);
        e.preventDefault();
        this.errors = {};
        if (!this.state.old_password) {
            this.setState({
                msg : 'رمز عبور قبلی الزامی است!'
            });
        }
        if (!this.state.password) {
            this.setState({
                msg : 'رمز عبور جدید الزامی است!'
            });
        }
        if (!this.state.password_confirm ) {
            this.setState({
                msg : 'تکرار رمز عبور جدید الزامی است!'
            });
        } else if (this.state.password_confirm !== this.state.password) {
            this.setState({
                msg : 'رمز عبور جدید با تکرار آن برابر نیست!'
            });
        }else{
            axios.post(`${config.url}/${this.props.token}/change_password`,this.state)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        msg : response.data.msg
                    });
                })
                .catch(error => {
                    throw(error);
                });
        }
    };
    render() {
        return (
            <div className="container d-flex justify-content-center">
                    <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                        <p className="login-box-msg text-danger">{this.state.msg}</p>
                        <h5 className="grey-text text-darken-3">تغییر رمز عبور</h5>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="old_password" className="col-md-3 text-right">رمز عبور قدیم<span className="text-danger">*</span></label>
                            <input type="password"
                                   onChange={this.handleChange}
                                   id="old_password"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.old_password}
                            />
                        </div>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="password" className="col-md-3 text-right">رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   onChange={this.handleChange}
                                   id="password"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.password}
                            />
                        </div>
                        <div className="input-field d-flex mb-3">
                            <label htmlFor="password_confirm" className="col-md-3 text-right">تکرار رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   id="password_confirm"
                                   onChange={this.handleChange}
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.password_confirm}
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


