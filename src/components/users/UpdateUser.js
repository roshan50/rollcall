import React from 'react';
import {updateUser, fetchUserTypes} from "../../store/actions/userActions";
import {connect} from "react-redux";
import axios from "axios/index";
import config from "../../config";

class UpdateUser extends React.Component {
    state = {
        name: '',
        email: '',
        type: '',
        chief_id: '',
        direct_id: ''
    };

    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get(`${config.url}/${this.props.token}/user/show/${id}`)
            .then(response => {
                if(response.data.user) {
                    this.setState({
                        name: response.data.user.name,
                        email: response.data.user.email,
                        type: response.data.user.type,
                        chief_id: response.data.user.chief_id,
                        direct_id: response.data.user.direct_id
                    });
                }
            })
            .catch(error => {
                throw(error);
            });

        this.props.fetchUserTypes('chief',this.props.token);
        this.props.fetchUserTypes('direct',this.props.token);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        var id = this.props.match.params.id;
        if (this.state.name.trim() && this.state.email.trim()) {
            this.props.updateUser(this.state,id,this.props.token);
        }
    };

    chief_options(){
        var options = '';
        if(this.props.chiefs){
            options = this.props.chiefs.map(function(chief,i) {
                return <option key={i} value={chief.id}>{chief.name}</option>
            });
        }
        return options;
    }

    direct_options(){
        var options = '';
        if(this.props.directs) {
            options = this.props.directs.map(function (direct, i) {
                return <option key={i} value={direct.id}>{direct.name}</option>
            });
        }
        return options;
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form onSubmit={ this.handleSubmit } className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">ویرایش کاربر</h5>
                    <p className="text-danger">{this.props.msg}</p>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="name" className="col-md-3 text-right">نام<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            name="name"
                            required="required"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.name}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="email" className="col-md-3 text-right">ایمیل<span className="text-danger">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required="required"
                            className="form-control email-validate col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="type" className="col-md-3 text-right">نوع<span className="text-danger">*</span></label>
                        <select
                        name="type"
                        className="form-control col-md-8"
                        onChange={ this.handleInputChange }
                        value={ this.state.type }
                        >
                        <option value="normal">کاربر معمولی</option>
                        <option value="chief">مدیر ارشد</option>
                        <option value="direct">مدیر مستقیم</option>
                        </select>
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="chief" className="col-md-3 text-right">مدیر ارشد<span className="text-danger">*</span></label>
                        <select
                            name="chief_id"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.chief_id  }
                        >
                            <option value="">انتخاب کنید</option>
                            {this.chief_options()}
                        </select>

                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="direct" className="col-md-3 text-right">مدیر مستقیم<span className="text-danger">*</span></label>
                        <select
                            name="direct_id"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.direct_id }
                        >
                            <option value="">انتخاب کنید</option>
                            {this.direct_options()}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary col-md-3">ذخیره</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUserTypes : (type,token) => dispatch(fetchUserTypes(type,token)),
        updateUser : (data,id,token) => dispatch(updateUser(data,id,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token: state.auth.token,
        chiefs: state.users.chiefs,
        directs: state.users.directs,
        msg: state.users.update_msg,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);