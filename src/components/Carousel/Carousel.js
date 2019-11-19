import React, {Component} from 'react';
import './Carousel.css';
import Product from '../Product/product'

class Carousel extends Component{
    constructor(props){
        super(props);
        this.shiftFactor='';
    }
    shiftNext=()=>{
        if(this.shiftFactor > -800) 
        {
            this.shiftFactor = (this.shiftFactor - 160);
        }
        this.shift.style.left =  this.shiftFactor+"px";
    }
    shiftPrev=()=>{
        if(this.shiftFactor < 0)
        { 
            this.shiftFactor = (this.shiftFactor + 160);
        }
        this.shift.style.left =  this.shiftFactor+"px";
    }
    getProducts=(products)=>{
        return products.map((product)=>{
                return <Product key={product.sfid} product={product}/>;
            });
        }
    render(){
        const products= this.getProducts(this.props.products);
        return(
            <div className="carouselWrapper">
                <a className="prevButton" onClick={this.shiftPrev}>&#8249;</a>
                <div className="carouselContainer">
                    <div className="carouselDiv" ref={ref => {this.shift = ref;}} style={{width:this.props.products.length * 165 +"px"}}>
                        {products}
                    </div>
                </div>
                <a className="nextButton" onClick={this.shiftNext}>&#8250;</a>
            </div>
        );
    }
}
export default Carousel;