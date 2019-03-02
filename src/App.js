import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/Main';
import OneProduct from './components/Oneproduct';
import EditProduct from './components/EditProduct';
class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path='/' component={Main}/>
            <Route path='/product/:itemId' component={OneProduct}/>
            <Route path='/edit_product/:itemId' component={EditProduct}/>
          </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
