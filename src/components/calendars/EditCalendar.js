import React, {Component} from 'react';
import { connect } from 'react-redux'
import {fetchOneCalendar,updateCalendar} from "../../store/actions/calendarActions";

class EditCalendar extends Component {
    state={
        year: '',
        month: '',
        holidays: [],
        ReadOnly: 1,
    }
    componentDidMount(){
        let calendar = this.props.fetchCalendar(this.props.match.params.id)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateCalendar(this.state)
    }
    render() {
        console.log('id is')
        console.log(this.props.match.params.id)
        console.log(this.calendar)
        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit} className="bg-light text-right">
                    <h5 className="grey-text text-darken-3">اضافه کردن تاریخ</h5>
                    <p className="login-box-msg"></p>

                    <div className="input-field">
                        <label htmlFor="year">سال</label>
                        <input type="text" onChange={this.handleChange} id="year"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="month">ماه</label>
                        <select id="month" onChange={this.handleChange}>
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
                    <div className="input-field">
                        <label htmlFor="holidays">روزهای تعطیل</label>
                        <input type="text" onChange={this.handleChange} id="holidays"/>
                    </div>
                    <div className="input-field">
                        <input type="checkbox" onChange={this.handleChange} id="ReadOnly"/>
                        <label htmlFor="ReadOnly">فقط خواندنی</label>
                    </div>
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
        fetchCalendar: (id) => dispatch(fetchOneCalendar(id)),
        updateCalendar: (calendar) => dispatch(updateCalendar(calendar)),
    }
}
export default connect(null,mapDispatchToProps)(EditCalendar);
