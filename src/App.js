import React from 'react'
import classes from './App.module.css';
import Header from './Header';
import ProductPreview from './ProductPreview'
import ProductDetalisApp from './ProductDetalis/ProductDetalisApp'
import ProductData from './ProductData';
import { Component } from 'react';


class App extends Component{
  state = {
    productData: ProductData
  }
  render() {
    return (
      <div className="classes.App">
        <Header />

        <div className={classes.MainContainer}>

          <ProductPreview />
          <ProductDetalisApp data={this.state.productData}/>



        </div>
      </div >


    );
  }
}

export default App;
