import React from 'react'
import classes from './ProductSecondPreview.module.css';




const ProductSecondPreview = () => {
    return (
        <div className={classes.ProductSecondPreview}>
            <img src='https://imgur.com/iOeUBV7.png' alt="" />
            <div className={classes.HertBeadSection}>
                <i class="fas fa-heartbeat"></i>
                <p>
                    78
                </p>

            </div>
        </div>
    )
}
export default ProductSecondPreview