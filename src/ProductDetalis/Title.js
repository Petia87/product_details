import React from 'react'
import classes from './Title.module.css';
import ProductData from '../ProductData';



const Title = () => {
    return (
    <div >
        <h1 className={classes.ProductTitle}>{ProductData.title}</h1>

        <p className={classes.ProductDescription}>{ProductData.description}</p>
        <h3 className={classes.SectionHeading}>Select Color</h3>
    </div>
    )
}
export default Title