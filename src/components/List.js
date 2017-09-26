import React, {Component} from 'react';

import ListItem from './ListItem';
import ListItemEdit from "./ListItemEdit";


const List = props => (
    <ul>

        {
            props.rows.map((row, index) => {
                if (!row.editing) {
                    return (<ListItem key={index} handleListDoubleClick={props.handleListDoubleClick} value={row}
                                     removeItem={props.removeItem} index={index}/>)

                } else {
                    return (<ListItemEdit key={index} handleListDoubleClick={props.handleListDoubleClick} handleTextEnter={props.handleTextEnter} value={row}
                                         removeItem={props.removeItem} index={index}/>)
                }



        })

        }

    </ul>
);


export default List;