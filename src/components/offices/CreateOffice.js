import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createOffice} from "../../store/actions/officeActions";

class CreateOffice extends Component {
    state={
        name: '',
        lat: '',
        long: '',
        address: '',
        ReadOnly: 1,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createOffice(this.state)
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <p className="login-box-msg">{this.props.msg}</p>
                    <h5 className="grey-text text-darken-3">اضافه کردن دفتر کار</h5>

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
                               id="address"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.address}
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
        createOffice: (office) => dispatch(createOffice(office))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateOffice);
