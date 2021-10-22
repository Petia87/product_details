import React from 'react'
import classes from './ProductDetalisApp.module.css';

import Title from './Title';

import Button from './Button';
import ProductSecondPreview from './ProductSecondPreview';



const ProductDetalisApp = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        return (
            <img className={classes.ProductImage}
                src={item.imageUrl} alt={item.styleName}/>
        );
    })
    return (
        <div className={classes.ProductData}>
            <Title />

            <h3 className={classes.SectionHeading}>Select Color</h3>
           <div>
           {colorOptions}
           </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <Button />
            <button className={classes.PrimaryButton}>Buy Now</button>


            <ProductSecondPreview />



        </div>

    )
}
export default ProductDetalisApp