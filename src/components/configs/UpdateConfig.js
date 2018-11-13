import React, {Component} from 'react';
import { connect } from 'react-redux'
import {updateConfig} from "../../store/actions/configActions";

class UpdateConfig extends Component {
    state={
        title: '',
        value: '',
        ReadOnly: 1,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const url = window.location.href;
        let id = url.substr(url.lastIndexOf('/') + 1);
        this.props.updateConfig(this.state,id)
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <p className="login-box-msg">{this.props.msg}</p>
                    <h5 className="grey-text text-darken-3">تنظیمات</h5>

                    <div className="input-field d-flex mb-3">
                        <label htmlFor="title" className="col-md-3 text-right">عنوان<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="title"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.title}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="value" className="col-md-3 text-right">مقدار<span className="text-danger">*</span></label>
                        <input type="text"
                               id="value"
                               onChange={this.handleChange}
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.value}
                        />
                    </div>
                    {/*<div className="input-field">*/}
                        {/*<input type="checkbox" onChange={this.handleChange} id="ReadOnly"/>*/}
                        {/*<label htmlFor="ReadOnly">فقط خواندنی</label>*/}
                    {/*</div>*/}
                    <div className="input-filed">
                        <button className="btn pink lighten-1 z-depth-0">ذخیره</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updateConfig: (config,id) => dispatch(updateConfig(config,id))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateConfig);
