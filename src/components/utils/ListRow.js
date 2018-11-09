import React, { Component } from 'react';

class ListRow extends Component {
    componentDidMount(){
    }
    getItems(obj){
        var items = Object.keys(obj).map(function(key,i) {
            return <td key={i}>{obj[key]}</td>
        });
        return items
    }
    render() {
        console.log('list row')
        console.log(this.props.item)
        return (
            <tr>
                {this.getItems(this.props.item)}
                <td>
                    <button className="btn btn-danger" type="button" >
                        حذف
                    </button>
                </td>
                <td>ویرایش</td>
            </tr>
        );
    }
}

export default ListRow;