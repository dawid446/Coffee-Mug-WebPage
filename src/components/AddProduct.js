import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Fab, Paper } from '@material-ui/core';

class Add extends Component {
    state = {
        name:"",
        price:""

    }
    updateName = (event) =>
    {
        this.setState({name: event.target.value})

    }
    updatePrice = (event)=>
    {
        this.setState({price: event.target.value})
    }
    addToDatabase = () =>
    {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                price: this.state.price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('https://recrutationexercise1.azurewebsites.net/api/product',options)
        .then((response)=> {
            if(response.ok)
            {
                alert("Add to database")

            }
            else{
                alert("Cant add to database")
            }
        })


    this.setState({name:"",price:""})
    }

    render(){
        return(

        <Paper>
            <TextField label="Product Name" value={this.state.name} onChange={this.updateName.bind(this)}></TextField>
            <TextField label="Price Product" type="number" value={this.state.price} onChange={this.updatePrice.bind(this)}></TextField>
            <Fab color="secondary" onClick={this.addToDatabase.bind(this)}>Add</Fab>
        </Paper>

        )
    }
}
export default Add;