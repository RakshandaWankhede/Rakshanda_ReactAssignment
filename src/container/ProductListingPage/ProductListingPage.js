import React, { Component } from 'react';
import './ProductListingPage.scss';
// eslint-disable-next-line import/imports-first
import { connect } from 'react-redux';
import ListingProduct from '../../components/ListingProduct/ListingProduct';

class ProductListingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.props;
    return (
      <div className="ProductListingPage">
        {products.length > 0 ? <ListingProduct products={products} /> : null}
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(MapStateToProps, null)(ProductListingPage);
