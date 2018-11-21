import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchAllConfigs} from "../../store/actions/configActions";
import List from "../utils/List";

class ConfigList extends Component{
    componentDidMount(){
        this.props.fetchAllConfigs(this.props.token);
    }
    ConfigList(){
        const heads = ['عنوان', 'مقدار']

        if(this.props.configs['configs'] instanceof Array){
            var configs = this.props.configs['configs'];
            configs.map(function(obj,i) {
                delete obj['description']
                delete obj['created_at']
                delete obj['updated_at']
                delete obj['deleted_at']
                return obj;
            });
            return <List items={this.props.configs['configs']} heads={heads}/>;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="bg-light mt-5">
                        {this.ConfigList()}
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchAllConfigs : (token) => dispatch(fetchAllConfigs(token))
    }
}
const mapStateToProps = (state)=>{
    return{
        configs :  state.configs.configs,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConfigList);


