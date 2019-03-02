import React, { Component } from 'react'
import { TextField, Button, } from '@material-ui/core';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Square = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: white;
    border-radius: 10px;
`
class EditProduct extends Component{
    state ={
        product : [],
        productId:'',
        name : '',
        price : '',
    }
    componentDidMount = () =>
    {
        const id = this.props.match.params.itemId;
        console.log(id);
        fetch("https://recrutationexercise1.azurewebsites.net/api/product/"+id)
        .then(reposne => reposne.json())
        .then(json => this.setState({productId: json.productId,name: json.name, price : json.price, isLoaded: true}))
    }
    updateName = (event) =>
    {
        this.setState({name: event.target.value})
    }
    updatePrice = (event)=>
    {

        this.setState({price: event.target.value})
    }
    putToDatabase =() =>
    {
        console.log(this.state.productId)
        const id = this.props.match.params.itemId;
        let url = 'https://recrutationexercise1.azurewebsites.net/api/product/' + id
        const options = {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                productId : this.state.productId,
                name: this.state.name,
                price: this.state.price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url,options)
        .then(alert("Update In Database"))
    }

   render(){
       const { name,price,isLoaded } = this.state;
       if(isLoaded !== true)
       {
          return(<div></div>)
       }
       else{
       return(
          <Square>
               <TextField label=" Product Name" value={name} onChange={this.updateName.bind(this)}></TextField>
               <TextField label=" Price product" value={price} onChange={this.updatePrice.bind(this)}></TextField>
               <Button color="default" variant="contained" onClick={this.putToDatabase.bind(this)}>Update</Button>
               <Button color="secondary" variant="contained" component={Link} to={'/'}> Back to start</Button>
        </Square>

       )
   }
}
}
export default EditProduct