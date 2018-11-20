import React, {Component} from 'react';
import { connect } from 'react-redux'
import {updateOffice} from "../../store/actions/officeActions";
import axios from "axios/index";
import config from "../../config";

class UpdateOffice extends Component {
    state={
        name: '',
        lat: '',
        long: '',
        description: '',
        ReadOnly: 1,
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get(`${config.url}/${this.props.token}/office/show/${id}`)
            .then(response => {
                if(response.data.office) {
                    this.setState({
                        name: response.data.office.name,
                        lat: response.data.office.lat,
                        long: response.data.office.long,
                        description: response.data.office.description,
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
        this.props.updateOffice(this.state,id,this.props.token)
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">ویرایش دفتر کار</h5>
                    <p className="text-danger">{this.props.msg}</p>

                    <div className="input-field d-flex mb-3">
                        <label htmlFor="name" className="col-md-3 text-right">نام<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="name"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.name}
                        />
                    </div>

                    <div className="input-field d-flex mb-3">
                        <label htmlFor="lat" className="col-md-3 text-right">عرض جغرافیایی<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="lat"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.lat}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="long" className="col-md-3 text-right">طول جغرافیایی<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="long"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.long}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="address" className="col-md-3 text-right">آدرس<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="description"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.description}
                        />
                    </div>
                    {/*<div className="input-field">*/}
                    {/*<input type="checkbox" onChange={this.handleChange} id="ReadOnly"/>*/}
                    {/*<label htmlFor="ReadOnly">فقط خواندنی</label>*/}
                    {/*</div>*/}
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
        updateOffice: (office,id,token) => dispatch(updateOffice(office,id,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token,
        msg : state.offices.update_msg
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateOffice);
