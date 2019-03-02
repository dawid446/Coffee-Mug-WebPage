import React, { Component } from 'react'
import Product from './Product';
import Add from './AddProduct';
import styled from 'styled-components'
import { Paper, CircularProgress } from '@material-ui/core'

const MyPaper = styled(Paper)`
width: 450px;
margin-top: 20px;
`
class Main extends Component {


  state = {
    product: [],
    isLoaded: false
  }
  removeItem = (id) => {
    console.log(id);
    const url = `https://recrutationexercise1.azurewebsites.net/api/product`
    fetch(url + '/' + id, {
      method: 'delete'
    })
      .then(response => response.json())

    alert("Delete item");
  }

  componentDidMount = () => {

    fetch("https://recrutationexercise1.azurewebsites.net/api/product")
      .then(reposne => reposne.json())
      .then(json => this.setState({ product: json, isLoaded: true })
      )


  }
  componentDidUpdate = () => {

    fetch("https://recrutationexercise1.azurewebsites.net/api/product")
      .then(reposne => reposne.json())
      .then(json => this.setState({ product: json, isLoaded: true })
      )


  }
  render() {
    if (this.state.isLoaded !== true) {
      return (
      <div>
        <h1>Coffee Mug</h1>
        <Add ></Add>
        <MyPaper>
          <CircularProgress color="secondary"></CircularProgress>
        </MyPaper>
      </div>)
    }
    else {
      return (
        <>
        <h1>Coffee Mug</h1>
          <Add ></Add>
          <MyPaper>
            <Product data={this.state.product} delete={this.removeItem}></Product>
          </MyPaper>
        </>
      )
    }
  }
}
export default Main