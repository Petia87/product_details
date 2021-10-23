import React from 'react'
import classes from './ProductDetalisApp.module.css';
import Title from './Title';
import ProductSecondPreview from './ProductSecondPreview';

const ProductDetalisApp = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage)
        }
        return (
            <img key={pos} className={classArr.join(" ")}
                src={item.imageUrl} alt={item.styleName} 
                onClick={() => props.onColorOptionClick(pos)} />
        );
    })
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.SelectedFeatureItem)
            console.log(classArr);
        }
        return (
            <button onClick={() => props.onFeatureItemClick(pos)}
                key={pos} className={classArr.join(" ")}>{item}</button>
        )
    })

    return (
        <div className={classes.ProductData}>
            <Title />
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div >
                {featureList}
            </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
            <ProductSecondPreview />
        </div>
    )
}
export default ProductDetalisApp