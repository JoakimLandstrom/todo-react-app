import React, {Component} from 'react';

const ListItem = props => (
    <div>
   <li key={props.index} value={props.index} onDoubleClick={props.handleListDoubleClick}>{props.value.input}</li>
        <button value={props.index} onClick={props.removeItem}>Remove</button>
    </div>
);

export default ListItem;