import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createOffice} from "../../store/actions/officeActions";

class CreateOffice extends Component {
    state={
        name: '',
        lat: '',
        long: '',
        description: '',
        start_worktime: '',
        end_worktime: '',
        end_overtime: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createOffice(this.state,this.props.token)
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">اضافه کردن دفتر کار</h5>
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
                        <label htmlFor="address" className="col-md-3 text-right">آدرس</label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="description"
                               className="form-control col-md-8"
                               value={this.state.description}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="address" className="col-md-3 text-right">ساعت شروع کار<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="start_worktime"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.start_worktime}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="address" className="col-md-3 text-right">ساعت پایان کار<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="end_worktime"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.end_worktime}
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="address" className="col-md-3 text-right">ساعت پایان اضافه کاری<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="end_overtime"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.end_overtime}
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
const mapDispatchToProps = (dispatch)=>{
    return{
        createOffice: (office,token) => dispatch(createOffice(office,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token,
        msg : state.offices.add_msg
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateOffice);
