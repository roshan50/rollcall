import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchAllConfigs} from "../../store/actions/configActions";
import List from "../utils/List";

class ConfigList extends Component{
    componentDidMount(){
        this.props.fetchAllConfigs();
    }
    ConfigList(){
        const heads = ['مقدار', 'عنوان']
        if(this.props.configs['configs'] instanceof Array){
            return <List items={this.props.configs['configs']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="bg-light">
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
        configs :  state.configs,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConfigList);


