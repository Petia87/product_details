import React from 'react'
import classes from './ProductDetalis.module.css';
import ProductData from '../ProductData';
import Title from './Title';

const ProductDetalis = (props) => {
    return (
    <div className={classes.ProductData}>
       <Title/>
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
        <h3 className={classes.SectionHeading}>Features</h3>
        <div >
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(" ")}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
        </div>
        <button className={classes.PrimaryButton}>Buy Now</button>
        <div className={classes.ProductSecondPreview}>
            <img src='https://imgur.com/iOeUBV7.png' alt="" />
            <div className={classes.HertBeadSection}>
                <i class="fas fa-heartbeat"></i>
                <p>
                    78
                </p>

            </div>
        </div>
    </div>
    )
}
export default ProductDetalis