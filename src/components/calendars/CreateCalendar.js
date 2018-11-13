import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createCalendar} from "../../store/actions/calendarActions";

class CreateCalendar extends Component {
    state={
        year: '',
        month: '',
        holidays: [],
        ReadOnly: 1,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // var holidays = this.state.holidays.split(",");
        // this.setState({holidays:holidays});
        var data = this.state;
        data.holidays = data.holidays.split(",");
        // console.log(data.holidays)
        // console.log(data);
        // console.log(this.state);
        this.props.createCalendar(data);
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <form action="" onSubmit={this.handleSubmit}  className="bg-light col-md-6">
                    <h5 className="grey-text text-darken-3">اضافه کردن تاریخ</h5>
                    <p className="login-box-msg">{this.props.msg}</p>

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
                        <button className="btn pink lighten-1 z-depth-0">ذخیره</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        createCalendar: (calendar) => dispatch(createCalendar(calendar))
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCalendar);
