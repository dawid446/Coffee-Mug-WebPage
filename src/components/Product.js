import React, { Component } from 'react'
import { List, ListItemText, ListItem, Paper, ListItemSecondaryAction, IconButton, Button, CircularProgress } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

import {Link} from 'react-router-dom'





class Product extends Component{

    delete(id)
    {
        this.props.delete(id)
    }

    render()
    {

        return(

            <List>
                {this.props.data.map((item, id)=>
                   <ListItem button component={Link} to={`/product/${item.productId}`} key={id}>
                        <ListItemText primary={item.name}/>
                            <ListItemSecondaryAction>
                            <IconButton component={Link} to={`/edit_product/${item.productId}`}>
                                <EditIcon/>
                            </IconButton>

                            <IconButton onClick={this.delete.bind(this,item.productId)}>
                                    <DeleteIcon />
                            </IconButton>

                        </ListItemSecondaryAction>
                   </ListItem>

                    )}
            </List>


        )
    }
}

export default Product
