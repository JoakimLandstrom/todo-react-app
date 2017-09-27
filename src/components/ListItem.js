import React from 'react';
import '../css/ListItem.css'

const ListItem = props => (
    <div>
        <li key={props.index} id={props.index} onDoubleClick={props.handleListDoubleClick}>{props.value.input}</li>
        <button id={props.index} onClick={props.removeItem}>Remove</button>
    </div>
);

export default ListItem;