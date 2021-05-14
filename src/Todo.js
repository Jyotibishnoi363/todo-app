import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar} from "@material-ui/core";

const Todo = (props) => {
    return (
        <List>     
        <ListItem button>
        <ListItemAvatar>  
            </ListItemAvatar>
          <ListItemText primary={props.todo} secondary="Dummy date ⏱" />
        </ListItem>   
        </List>
    )
}

export default Todo;
