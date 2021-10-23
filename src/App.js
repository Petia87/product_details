import React, { Component } from 'react'
import classes from './App.module.css';
import Header from './Header';
import ProductPreview from './ProductPreview'
import ProductDetalisApp from './ProductDetalis/ProductDetalisApp'
import ProductData from './ProductData';



class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos })
  }
  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos })
  }
  render() {
    return (
      <div className="classes.App">
        <Header />
        <div className={classes.MainContainer}>
          <ProductPreview 
          currentPreviewImage={this.state.productData.colorOptions
          [this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature} />


          <ProductDetalisApp data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature} />
        </div>
      </div >
    );
  }
}

export default App;
