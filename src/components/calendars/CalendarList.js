import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllCalendars} from "../../store/actions/calendarActions";
import List from "../utils/List";

class CalendarList extends Component{
    componentDidMount(){
         this.props.fetchAllCalendars(this.props.token);
    }
    CalendarList(){
        const heads = ['سال', 'ماه','دفتر']

        if(this.props.calendars['calendars'] instanceof Array){
            var calendars = this.props.calendars['calendars'].map(function(obj,i) {
                return {
                    id:obj.id,
                    year:obj.year,
                    month:obj.month,
                    office:obj.office.name,
                };
            });
            return <List items={calendars} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 justify-content-start mb-4 mt-4 mb-4 mt-4">
                        <NavLink className="btn btn-info" to='/new/calendars'>جدید</NavLink>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="bg-light">
                        {this.CalendarList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllCalendars : (token) => dispatch(fetchAllCalendars(token))
    }
}
const mapStateToProps = (state)=>{
    return{
        calendars :  state.calendars,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CalendarList);


