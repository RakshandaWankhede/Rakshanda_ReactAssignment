import React, { Component } from 'react';
import './ProductSearchPage.scss';
// eslint-disable-next-line import/imports-first
import { connect } from 'react-redux';
import ListingProduct from '../../components/ListingProduct/ListingProduct';
import SearchFunctionHOC from '../../hoc/searchResult/searchResult';

class ProductSearchPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.props;
    const SearchedProducts = SearchFunctionHOC(ListingProduct, products);
    return (
      <div className="ProductSearchPage">
        <SearchedProducts />
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(MapStateToProps, null)(ProductSearchPage);
