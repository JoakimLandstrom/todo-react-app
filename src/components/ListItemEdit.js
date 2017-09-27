import React from 'react';

const ListItemEdit = props => (
    <div>
        <textarea id={props.index} key={props.index} defaultValue={props.value.input} onKeyPress={props.handleTextEnter}></textarea>
    </div>
);

export default ListItemEdit;