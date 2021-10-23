import React from 'react'
import classes from './ProductSecondPreview.module.css';




const ProductSecondPreview = () => {
    return (
        <div className={classes.ProductSecondPreview}>
            <img src='https://imgur.com/iOeUBV7.png' alt="" />
            <div className={classes.HertBeadSection1}>
                <i className="fas fa-envelope"></i>
                <p className="Message">SMS</p>

            </div>
        </div>
    )
}
export default ProductSecondPreview