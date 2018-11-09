import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllOffices} from "../../store/actions/officeActions";
import List from "../utils/List";

class OfficeList extends Component{
    componentDidMount(){
        this.props.fetchAllOffices();
    }
    OfficeList(){
        const heads = ['عرض', 'نام', 'شناسه','طول', 'آدرس', 'فقط خواندنی']
        if(this.props.offices['offices'] instanceof Array){
            return <List items={this.props.offices['offices']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2 mr-md-5">
                        <NavLink className="btn btn-info" to='/new/offices'>جدید</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mr-md-5">
                        {this.OfficeList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllOffices : () => dispatch(fetchAllOffices())
    }
}
const mapStateToProps = (state)=>{
    return{
        offices :  state.offices
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OfficeList);


