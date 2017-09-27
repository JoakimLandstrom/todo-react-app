import React from 'react';
import '../css/ListItem.css'

const ListItemEdit = props => (
    <div className="ListItemEdit">
        <textarea autoFocus id={props.index} key={props.index} defaultValue={props.value.input} onKeyPress={props.handleTextEnter}></textarea>
        <button id={props.index} onClick={props.removeItem}>X</button>
    </div>
);

export default ListItemEdit;