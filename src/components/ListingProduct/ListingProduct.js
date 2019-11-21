import React, { Component } from 'react';
import './ListingProduct.scss';
import Product from '../Product/product';

class ListingProduct extends Component {
  constructor(props) {
    super(props);
    this.shiftFactor = '';
  }

  getProducts = () => {
    const { products } = this.props;
    return products.map(product => {
      return <Product key={product.sfid} product={product} />;
    });
  };

  render() {
    const prods = this.getProducts();
    return <div className="listingWrapper">{prods}</div>;
  }
}
export default ListingProduct;
