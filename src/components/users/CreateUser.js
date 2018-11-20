import React from 'react';
import {createUser,fetchUserTypes} from "../../store/actions/userActions";
import {connect} from "react-redux";

class CreateUser extends React.Component {
    state = {
        name: '',
        email: '',
        type: 'normal',
        chief_id: '',
        direct_id: '',
        msg: ''
    };

    componentDidMount(){
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
        if (this.state.name.trim() && this.state.email.trim()) {
            this.props.createUser(this.state,this.props.token);
            // this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            type: 'normal',
            chief_id: '',
            direct_id: ''
        });
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
                    <h5 className="grey-text text-darken-3">اضافه کردن کاربر</h5>
                    <p className="text-danger">{this.props.msg}</p>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="name" className="col-md-3 text-right">نام<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            name="name"
                            required="required"
                            minLength="5"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
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
                            <option value="normal" defaultValue >کاربر معمولی</option>
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
                            value={ this.state.chief_id }
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
                        <button type="button" className="btn btn-warning col-md-3 mr-2" onClick={ this.handleReset }>
                            پاک کردن
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUserTypes : (type,token) => dispatch(fetchUserTypes(type,token)),
        createUser : (data,token) => dispatch(createUser(data,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token: state.auth.token,
        chiefs: state.users.chiefs,
        directs: state.users.directs,
        msg: state.users.add_msg
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);