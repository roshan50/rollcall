import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createCalendar} from "../../store/actions/calendarActions";

class CreateCalendar extends Component {
    // state={
    //     year: '',
    //     month: '',
    // }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCalendar(this.state)
    }
    render() {
        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">اضافه کردن تاریخ</h5>
                    <div className="input-field">
                        <label htmlFor="title">سال</label>
                        <input type="text" onChange={this.handleChange} id="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">ماه</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
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
        createCalendar: (calendar) => dispatch(createCalendar(calendar))
    }
}
export default connect(null,mapDispatchToProps)(CreateCalendar);
