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
        const heads = ['عرض', 'نام','طول', 'آدرس', 'فقط خواندنی']
        if(this.props.offices['offices'] instanceof Array){
            return <List items={this.props.offices['offices']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 justify-content-start mb-4 mt-4 mb-4 mt-4">
                        <NavLink className="btn btn-info" to='/new/offices'>جدید</NavLink>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="bg-light">
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
        offices :  state.offices,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OfficeList);


