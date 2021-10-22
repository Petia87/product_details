import React from 'react'
import classes from './ProductDetalisApp.module.css';

import ProductData from '../ProductData';
import Title from './Title';
import ProductImg from './ProductImg';
import Button from './Button';
import ProductSecondPreview from './ProductSecondPreview';



const ProductDetalisApp = (props) => {
    return (
        <div className={classes.ProductData}>
            <Title />
            <ProductImg />
            <h3 className={classes.SectionHeading}>Features</h3>
            <Button />
            <button className={classes.PrimaryButton}>Buy Now</button>
            <ProductSecondPreview />
        </div>
    )
}
export default ProductDetalisApp