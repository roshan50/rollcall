import React, { Component } from 'react';

class ListHead extends Component {
    render() {
        return (
            <thead>
                <tr styles="background-color:red;">
                    { this.props.heads && this.props.heads.map((head,i) => {
                        return <th scope="col" key={i}>{head}</th>
                    })}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default ListHead;