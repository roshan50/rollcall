import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import Tooltip from '@material-ui/core/Tooltip';
// import {deleteRecord} from "../../store/actions/listActions";
import {deleteUser} from "../../store/actions/userActions";
import {deleteCalendar} from "../../store/actions/calendarActions";
import {deleteOffice} from "../../store/actions/officeActions";
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class ListRow extends Component {
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
        var url = window.location.href;
        url = url.substr(url.lastIndexOf('/')+1 );
        this.adr = url.substring(0, url.length - 1);
    }

    getItems(obj){
        var items = Object.keys(obj).map(function(key,i) {
            if(key === 'chief'){
                if(obj[key] !== null)
                    return <td key={i}>{obj[key].name}</td>
                else return <td></td>
            }
            else if(key === 'direct'){
                if(obj[key] !== null)
                    return <td key={i}>{obj[key].name}</td>
                else return <td></td>
            }else if(key !== 'id'){
                return <td key={i}>{obj[key]}</td>
            }
            return '';
        });
        return items;
    }

    delete(id){
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1 className="text-right">هشدار حذف</h1>
                        <p className="text-right">آیا مطمئنید که می خواهید حذف کنید؟</p>
                        <button className="btn btn-warning  col-md-3" onClick={onClose}>لغو</button>
                        <button className="btn btn-primary  col-md-3 mr-2" onClick={() => {
                            this.handleClickDelete(id,this.adr)
                            onClose()
                        }}>حذف</button>
                    </div>
                )
            }
        })

    }

    handleClickDelete(id,adr){
        switch(adr){
            case 'user':
                this.props.deleteUser(id,adr,this.props.token);
                break;
            case 'calendar':
                this.props.deleteCalendar(id,adr,this.props.token);
                break;
            case 'office':
                this.props.deleteOffice(id,adr,this.props.token);
                break;
            default:
                console.log(adr)
        }

    }

    delete_td(){
        return <td style={{cursor:'pointer'}} onClick={this.delete.bind(this,this.props.item.id)} >
                    <Tooltip title="حذف" placement="left">
                        <MaterialIcon icon="delete" color='red' />
                    </Tooltip>
                </td>
    }

    show_td(){
        return <td style={{cursor:'pointer'}}>
                    <Tooltip title="نمایش" placement="left">
                        <NavLink className="nav-link" to={'/show/'+this.adr+'/'+this.props.item.id}>
                            <MaterialIcon icon="account_box" color='green' />
                        </NavLink>
                    </Tooltip>
                </td>
    }

    render() {
        return (
            <tr>
                <td>{this.props.i+1}</td>
                {this.getItems(this.props.item)}
                { (this.adr !== 'config') ? this.delete_td() : ''}
                <td style={{cursor:'pointer'}}>
                    <Tooltip title="ویرایش" placement="left">
                        <NavLink className="nav-link" to={'/edit/'+this.adr+'/'+this.props.item.id}>
                            <MaterialIcon icon="update" color='blue' />
                        </NavLink>
                    </Tooltip>
                </td>
                { (this.adr === 'user') ? this.show_td() : ''}
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteUser : (id,url,token) => dispatch(deleteUser(id,url,token)),
        deleteCalendar : (id,url,token) => dispatch(deleteCalendar(id,url,token)),
        deleteOffice : (id,url,token) => dispatch(deleteOffice(id,url,token)),
    }
}
const mapStateToProps = (state)=>{
    return{
        record :  state.record,
        token : state.auth.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListRow);