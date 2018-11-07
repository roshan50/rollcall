import React, { Component } from 'react';

class ListRow extends Component {
    render() {
        let heads = this.props.heads;
        return (
            <tr>
                { heads && heads.map((head,i) => {
                    return <td key={i}>{this.props.item[head]}</td>
                })}
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