import React, { Component } from 'react';
import axios from "axios/index";
import config from "../../config";
import {connect} from "react-redux";

class ChangePass extends Component {
    state = {
        old: '',
        new: '',
        new_confirmation: '',
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
        if (!this.state.old) {
            this.setState({
                msg : 'رمز عبور قبلی الزامی است!'
            });
        }
        if (!this.state.new) {
            this.setState({
                msg : 'رمز عبور جدید الزامی است!'
            });
        }
        if (!this.state.new_confirmation ) {
            this.setState({
                msg : 'تکرار رمز عبور جدید الزامی است!'
            });
        } else if (this.state.new_confirmation !== this.state.new) {
            this.setState({
                msg : 'رمز عبور جدید با تکرار آن برابر نیست!'
            });
        }else{
            axios.post(`${config.url}/${this.props.token}/password`,this.state)
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
                        <p className="text-danger">{this.state.msg}</p>
                        <h5 className="grey-text text-darken-3">تغییر رمز عبور</h5>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="old" className="col-md-3 text-right">رمز عبور قدیم<span className="text-danger">*</span></label>
                            <input type="password"
                                   onChange={this.handleChange}
                                   id="old"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.old}
                            />
                        </div>

                        <div className="input-field d-flex mb-3">
                            <label htmlFor="new" className="col-md-3 text-right">رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   onChange={this.handleChange}
                                   id="new"
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.new}
                            />
                        </div>
                        <div className="input-field d-flex mb-3">
                            <label htmlFor="new_confirmation" className="col-md-3 text-right">تکرار رمز عبور<span className="text-danger">*</span></label>
                            <input type="password"
                                   id="new_confirmation"
                                   onChange={this.handleChange}
                                   className="form-control col-md-8"
                                   required="required"
                                   minLength="6"
                                   value={this.state.new_confirmation}
                            />
                        </div>

                        <div className="input-filed">
                            <button className="btn btn-primary">ذخیره</button>
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


