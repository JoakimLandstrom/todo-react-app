import React, {Component} from 'react';

const ListItemEdit = props => (
    <div>
        <textarea accessKey={props.index} key={props.index} defaultValue={props.value.input} onKeyPress={props.handleTextEnter}></textarea>
    </div>
);

export default ListItemEdit;