import React from 'react';
import './product.scss';


const Product =(props)=>{
    const {product} = props;
    return(
        <div className="cardA">
            <div className="imageCard"><img src={product.compositeProducts[0].EProductMedia.smallURI } alt={product.sfdcName}/></div>
            <div className="containerA">
                <div className ="productName">
                <p>{product.sfdcName}</p>
                <p>$ {product.compositeProducts[0].priceEntry.listPrice}</p>
                </div> 
                <button className="cartButtonA">Add to Cart</button>
            </div>
        </div>
    );
};
export default Product;