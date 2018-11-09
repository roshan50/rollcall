import React, { Component } from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {fetchAllConfigs} from "../../store/actions/configActions";
import List from "../utils/List";

class ConfigList extends Component{
    componentDidMount(){
        this.props.fetchAllConfigs();
    }
    ConfigList(){
        const heads = ['مقدار', 'عنوان', 'شناسه']
        if(this.props.configs['configs'] instanceof Array){
            return <List items={this.props.configs['configs']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2 mr-md-5">
                        <NavLink className="btn btn-info" to='/new/configs'>جدید</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mr-md-5">
                        {this.ConfigList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllConfigs : () => dispatch(fetchAllConfigs())
    }
}
const mapStateToProps = (state)=>{
    return{
        configs :  state.configs
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConfigList);


