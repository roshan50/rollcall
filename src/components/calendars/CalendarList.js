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
        const heads = ['id', 'year', 'month']
        if(this.props.calendars['calendars'] instanceof Array){
            return <List items={this.props.calendars['calendars']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <NavLink to='calendars/new' className="bg-dark">جدید</NavLink>
                {this.CalendarList()}
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


