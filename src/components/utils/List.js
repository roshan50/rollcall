import React, { Component } from 'react';
import ListHead from "./ListHead";
import ListRow from "./ListRow";

class List extends Component {
    render() {
        return (
            <table>
                <ListHead items={this.props.heads}/>
                <tbody>
                    { this.props.items && this.props.items.map(function(item){
                        return(
                            <ListRow item={item} heads={this.props.heads} key={item.id}/>
                        );
                    }.bind(this, this.props.heads))}
                </tbody>
            </table>
        );
    }
}

export default List;

// import React from 'react';

// const List = ({ calendars }) => {
//     // console.log(calendars)
//   return (
//     <ul>
//      {calendars && calendars.length > 0 && calendars.map(row => <li key={row.id}>{row.year}</li>)}
//    </ul>
//   );
// }
//
// export default List;