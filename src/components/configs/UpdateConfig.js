import React, {Component} from 'react';
import { connect } from 'react-redux'
import {updateConfig} from "../../store/actions/configActions";
import axios from "axios/index";
import config from "../../config";

class UpdateConfig extends Component {
    state={
        name: '',
        value: '',
        description: '',
        ReadOnly: 1,
        msg: ''
    }

    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get(`${config.url}/${this.props.token}/config/show/${id}`)
            .then(response => {
                if(response.data.config) {
                    this.setState({
                        name: response.data.config.name,
                        value: response.data.config.value,
                        description: response.data.config.description,
                    });
                }
            })
            .catch(error => {
                throw(error);
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var id = this.props.match.params.id;
        this.props.updateConfig(this.state,id,this.props.token)
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">تنظیمات </h5>
                    <p className="text-danger">{this.props.msg}</p>

                    <div className="input-field d-flex mb-3">
                        <label htmlFor="name" className="col-md-3 text-right">عنوان</label>
                        <input type="text"
                               readOnly
                               id="name"
                               className="form-control col-md-8"
                               value={this.state.name}
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
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="description" className="col-md-3 text-right">توضیح<span className="text-danger">*</span></label>
                        <p className="col-md-8">{this.state.description}</p>
                    </div>
                    <div className="input-filed">
                        <button className="btn btn-primary">ذخیره</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updateConfig: (config,id,token) => dispatch(updateConfig(config,id,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token,
        msg : state.configs.update_msg,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateConfig);
