import React, { Component } from 'react';

class ListHead extends Component {
    render() {
        return (
            <thead>
                <tr styles="background-color:red;">
                    { this.props.items && this.props.items.map((item,i) => {
                        return <th key={i}>{item}</th>
                    })}
                </tr>
            </thead>
        );
    }
}

export default ListHead;