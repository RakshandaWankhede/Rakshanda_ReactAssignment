import React, {Component} from 'react';
import './product.css';


const product =(props)=>{
    return(
        <div className="cardA">
            <div className="imageCard"><img src={props.product.compositeProducts[0].EProductMedia.smallURI}/></div>
            <div className="containerA">
                <div className ="productName">
                <p>{props.product.sfdcName}</p>
                <p>$ {props.product.compositeProducts[0].priceEntry.listPrice}</p>
                </div> 
                <button className="cartButtonA">Add to Cart</button>
            </div>
        </div>
    );
}
export default product;