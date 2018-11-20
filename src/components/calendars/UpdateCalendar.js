import React, {Component} from 'react';
import { connect } from 'react-redux'
import {updateCalendar} from "../../store/actions/calendarActions";
import axios from "axios/index";
import config from "../../config";

class UpdateCalendar extends Component {
    state={
        year: '',
        month: '1',
        holidays: '',
        ReadOnly: 1,
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        axios.get(`${config.url}/${this.props.token}/calendar/show/${id}`)
            .then(response => {
                if(response.data.calendar) {
                    this.setState({
                        year: response.data.calendar.year,
                        month: response.data.calendar.month,
                        holidays: response.data.calendar.holidays.toString(),
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
        var data = this.state;
        data.holidays = data.holidays;
        var id = this.props.match.params.id;
        this.props.updateCalendar(data,id,this.props.token);
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">ویرایش تاریخ</h5>
                    <p className="text-danger">{this.props.msg}</p>

                    <div className="input-field d-flex mb-3">
                        <label htmlFor="year" className="col-md-3 text-right">سال<span className="text-danger">*</span></label>
                        <input type="text"
                               className="form-control col-md-8"
                               onChange={this.handleChange}
                               id="year"
                               required="required"
                               value={ this.state.year }
                        />
                    </div>
                    <div className="input-field d-flex mb-3">
                        <label htmlFor="month" className="col-md-3 text-right">ماه<span className="text-danger">*</span></label>
                        <select id="month"
                                onChange={this.handleChange}
                                className="form-control col-md-8"
                                required="required"
                                value={ this.state.month }
                        >
                            <option value="1">فروردین</option>
                            <option value="2">اردیبهشت</option>
                            <option value="3">خرداد</option>
                            <option value="4">تیر</option>
                            <option value="5">مرداد</option>
                            <option value="6">شهریور</option>
                            <option value="7">مهر</option>
                            <option value="8">آبان</option>
                            <option value="9">آذر</option>
                            <option value="10">دی</option>
                            <option value="11">بهمن</option>
                            <option value="12">اسفند</option>
                        </select>
                    </div>

                    <label>لطفا روزهای تعطیل را با ، از هم جدا کنید!</label>
                    <div className="input-field d-flex mb-3">

                        <label htmlFor="holidays" className="col-md-3 text-right">روزهای تعطیل<span className="text-danger">*</span></label>
                        <input type="text"
                               onChange={this.handleChange}
                               id="holidays"
                               className="form-control col-md-8"
                               required="required"
                               value={this.state.holidays}
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
        updateCalendar: (calendar,id,token) => dispatch(updateCalendar(calendar,id,token))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token,
        msg: state.calendars.update_msg
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateCalendar);
