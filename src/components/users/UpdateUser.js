import React from 'react';
import {updateUser,fetchUserTypes,fetchOneUser} from "../../store/actions/userActions";
import {connect} from "react-redux";

class UpdateUser extends React.Component {
    state = {
        name: '',
        email: '',
        type: '',
        chief_id: '',
        direct_id: ''
    };

    constructor(props){
        super(props);
        // this.render = this.render.bind(this);
        var url = window.location.href;
        this.id  = url.substr(url.lastIndexOf('/')+1 );
        // this.adr = url.substring(0, url.length - 1);
    }

    componentDidMount(){  console.log(this.id);
        this.props.fetchOneUser(this.id,this.props.token);
        console.log('props user')
        console.log(this.props.user)
        // console.log(this.props.user.name)
        this.props.fetchUserTypes('direct',this.props.token);
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
            this.props.updateUser(this.state,this.id,this.props.token);
            // this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            type: '',
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

    get_user(){
        this.name = '';
        this.email = '';
        if(this.props.user){
            this.name = this.props.user.name;
            this.email = this.props.user.email;
        }
    }

    render() {
        console.log('render');
        console.log(this.props.user);
        return (
            <div className="container d-flex justify-content-center">
                <form onSubmit={ this.handleSubmit } className="bg-light col-md-6">
                    <p className="login-box-msg">{this.props.msg}</p>
                    <h5 className="grey-text text-darken-3">اضافه کردن کاربر</h5>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="name" className="col-md-3 text-right">نام<span className="text-danger">*</span></label>
                        <input
                            type="text"
                            name="name"
                            required="required"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.name }
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
                            value={ this.email }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="type" className="col-md-3 text-right">نوع<span className="text-danger">*</span></label>
                        {/*<select*/}
                        {/*name="type"*/}
                        {/*className="form-control col-md-8"*/}
                        {/*onChange={ this.handleInputChange }*/}
                        {/*value={ this.state.type }*/}
                        {/*>*/}
                        {/*<option value="normal">کاربر معمولی</option>*/}
                        {/*<option value="chief">مدیر ارشد</option>*/}
                        {/*<option value="direct">مدیر مستقیم</option>*/}
                        {/*</select>*/}
                        <input
                            type="text"
                            name="type"
                            required="required"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.type }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="chief" className="col-md-3 text-right">مدیر ارشد<span className="text-danger">*</span></label>
                        {/*<select*/}
                        {/*// name="chief_id"*/}
                        {/*className="form-control col-md-8"*/}
                        {/*onChange={ this.handleInputChange }*/}
                        {/*// value={ this.state.chief_id }*/}
                        {/*>*/}
                        {/*{this.chief_options()}*/}
                        {/*</select>*/}
                        <input
                            type="text"
                            name="chief_id"
                            required="required"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.chief_id }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="direct" className="col-md-3 text-right">مدیر مستقیم<span className="text-danger">*</span></label>
                        {/*<select*/}
                        {/*name="direct_id"*/}
                        {/*className="form-control col-md-8"*/}
                        {/*onChange={ this.handleInputChange }*/}
                        {/*value={ this.state.direct_id }*/}
                        {/*>*/}
                        {/*{this.direct_options()}*/}
                        {/*</select>*/}
                        <input
                            type="text"
                            name="direct_id"
                            required="required"
                            className="form-control col-md-8"
                            onChange={ this.handleInputChange }
                            value={ this.state.direct_id }
                        />
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
        fetchOneUser : (id,token) => dispatch(fetchOneUser(id,token)),
        fetchUserTypes : (type,token) => dispatch(fetchUserTypes(type,token)),
        updateUser : (data,id,token) => dispatch(updateUser(data,id,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token: state.auth.token,
        chiefs: state.users.chiefs,
        directs: state.users.directs,
        user : state.user
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);