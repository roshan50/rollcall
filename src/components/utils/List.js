import React, { Component } from 'react';
import ListHead from "./ListHead";
import ListRow from "./ListRow";

class List extends Component {
    render() {
        return (
            <table className="table">
                <ListHead heads={this.props.heads}/>
                <tbody>
                    { this.props.items && this.props.items.map(function(item,i){
                        return(
                            <ListRow item={item} i={i} key={item.id}/>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default List;