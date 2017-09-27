import React from 'react';
import '../css/ListItem.css'

const ListItem = props => (
    <li className="ListItem" key={props.index} id={props.index} onDoubleClick={props.handleListDoubleClick}>{props.value.input}</li>
);

export default ListItem;