import React, {Component} from 'react';

import ListItem from './ListItem';


const List = props => (
    <ul>

        {
            props.rows.map((row, index) =>

            <ListItem key={index} handleListDoubleClick={props.handleListDoubleClick} value={row} removeItem={props.removeItem} index={index}/>

                )
        }

    </ul>
);


export default List;