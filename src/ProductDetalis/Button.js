import React from 'react'
import classes from './Button.module.css';



const Button = (props) => {
    return (
<div >
    <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(" ")}>Time</button>
    <button className={classes.FeatureItem}>Heart Rate</button>
</div>

    )
}
export default Button