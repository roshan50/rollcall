import React from 'react';
import {updateUser, fetchUserTypes} from "../../store/actions/userActions";
import {connect} from "react-redux";
import axios from "axios/index";
import config from "../../config";
import {Redirect} from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

class ShowUser extends React.Component {
    state = {
        id: '',
        name: '',
        email: '',
        type: '',
        chief: '',
        direct: '',
        QR: 'none'
    };

    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get(`${config.url}/${this.props.token}/user/show/${id}`)
            .then(response => {
                if(response.data.user) {
                    this.setState({
                        id: response.data.user.id,
                        name: response.data.user.name,
                        email: response.data.user.email,
                        type: response.data.user.type,
                        chief: response.data.user.chief?response.data.user.chief.name:'-',
                        direct: response.data.user.direct?response.data.user.direct.name:'-',
                        QR: response.data.QR?String.substr(response.data.QR,response.data.QR.indexOf('<svg')):'used'
                    });
                }
            })
            .catch(error => {
                throw(error);
            });

        this.props.fetchUserTypes('chief',this.props.token);
        this.props.fetchUserTypes('direct',this.props.token);
    }

    QR(id){
        console.log(id);
        axios.get(`${config.url}/${this.props.token}/user/show/${id}?freshQRCode=1`)
        .then(response => {
            console.log(response.data.user)
            if(response.data.user) {
                this.setState({
                    QR: response.data.QR?String.substr(response.data.QR,response.data.QR.indexOf('<svg')):'used'
                });
                this.props.history.push('/show/user/'+id);
            }
        })
        .catch(error => {
            throw(error);
        });
    }

    svg(code){
        return (
        <div className="QR_Code" dangerouslySetInnerHTML={{__html: code}}></div>
        )
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form onSubmit={ this.handleSubmit } className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">{ this.state.name}</h5>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="email" className="col-md-3 text-right">ایمیل</label>
                        <input
                            readOnly
                            className="form-control email-validate col-md-8"
                            value={ this.state.email }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="type" className="col-md-3 text-right">نوع</label>
                        <input
                            readOnly
                            className="form-control email-validate col-md-8"
                            value={ {chief:'مدیر ارشد',direct:'مدیر مستقیم',normal:'کارمند'}[this.state.type] }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="chief" className="col-md-3 text-right">مدیر ارشد</label>
                        <input
                            readOnly
                            className="form-control email-validate col-md-8"
                            value={ this.state.chief }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="direct" className="col-md-3 text-right">مدیر مستقیم</label>
                        <input
                            readOnly
                            className="form-control email-validate col-md-8"
                            value={ this.state.direct }
                        />
                    </div>
                    <div className="form-group">
                    {this.state.QR=='used'?<MaterialIcon onClick={()=>{this.QR(this.state.id)}} icon="refresh" color='green' />:this.svg(this.state.QR )}
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
export default connect(mapStateToProps,mapDispatchToProps)(ShowUser);