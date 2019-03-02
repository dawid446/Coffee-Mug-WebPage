import React, { Component } from 'react'
import { CircularProgress,Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

class OneProduct extends Component{

    state ={
        product: [],
        isLoaded: false
    }

    componentDidMount = () =>
    {
        const id = this.props.match.params.itemId;
        console.log(id);
        fetch("https://recrutationexercise1.azurewebsites.net/api/product/"+id)
        .then(reposne => reposne.json())
        .then(json => this.setState({product: json, isLoaded: true}))
    }

    render(){
        const { product,isLoaded } = this.state;

        if(isLoaded !== true)
        {
            return(
                <div>
                    <CircularProgress color="secondary"> </CircularProgress>
                </div>
            )
        }else{


        return(

            <div><h1>Product</h1>

                <ul>
                    <li>
                        Produkt ID: {product.productId}
                    </li>
                    <li>
                        Name: {product.name}
                    </li>
                    <li>
                        Price: {product.price}
                    </li>
                </ul>
                <Button color="secondary" variant="contained" component={Link} to={'/'}> Back to start</Button>
            </div>

        )
    }
}
}
export default OneProduct;