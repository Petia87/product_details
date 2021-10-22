import React from 'react'
import classes from './ProductImg.module.css';



const ProductImg = (props) => {
    return (
        <div >
            <img className={classes.ProductImage}
                src='https://imgur.com/PTgQlim.png' alt="" />
            <img className={classes.ProductImage}
                src='https://imgur.com/PTgQlim.png' alt="" />
            <img className={classes.ProductImage}
                src='https://imgur.com/PTgQlim.png' alt="" />
            <img className={classes.ProductImage}
                src='https://imgur.com/PTgQlim.png' alt="" />
        </div>
        
  
    )
}
export default ProductImg