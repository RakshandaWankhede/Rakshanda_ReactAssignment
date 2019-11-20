import React, {Component} from 'react';
import './Carousel.scss';
import Product from '../Product/product';

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
        this.shift.style.left =  `${this.shiftFactor}px`;
    }

    shiftPrev=()=>{
        if(this.shiftFactor < 0)
        { 
            this.shiftFactor = (this.shiftFactor + 160);
        }
        this.shift.style.left =  `${this.shiftFactor}px`;
    }

    getProducts=()=>{
        const { products } = this.props;
        return products.map((product)=>{
                return <Product key={product.sfid} product={product}/>;
            });
        }

    render(){
        const prods= this.getProducts();
        const { products } =this.props;
        return(
            <div className="carouselWrapper">
                <div className="prevButton" onClick={this.shiftPrev}>&#8249;</div>
                <div className="carouselContainer">
                    <div className="carouselDiv" ref={ref => {this.shift = ref;}} style={{width:`${products.length * 165 }px`}}>
                        {prods}
                    </div>
                </div>
                <div className="nextButton" onClick={this.shiftNext}>&#8250;</div>
            </div>
        );
    }
}
export default Carousel;