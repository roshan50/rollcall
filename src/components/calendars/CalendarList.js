import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllCalendars} from "../../store/actions/calendarActions";
import List from "../utils/List";

class CalendarList extends Component{
    componentDidMount(){
         this.props.fetchAllCalendars();
    }
    CalendarList(){
        const heads = ['سال', 'ماه', 'شناسه']
        if(this.props.calendars['calendars'] instanceof Array){
            return <List items={this.props.calendars['calendars']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2 mr-md-5">
                        <NavLink className="btn btn-info" to='/new/calendars'>جدید</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mr-md-5">
                        {this.CalendarList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllCalendars : () => dispatch(fetchAllCalendars())
    }
}
const mapStateToProps = (state)=>{
    return{
        calendars :  state.calendars
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarList);


