import React, { Component } from 'react';
import './searchResult.scss';

const SearchFunctionHOC = (ListingProduct, products) => {
  class SearchComponent extends Component {
    constructor() {
      super();
      this.state = {
        filteredData: products
      };
    }

    inputChangeHandler = () => {
      const Data = products.filter(product => {
        return product.sfdcName
          .toLowerCase()
          .includes(this.searchFor.value.toLowerCase().trim());
      });
      this.setState({ filteredData: Data });
    };

    render() {
      const { filteredData } = this.state;
      return (
        <div className="searchForm">
          <div className="inputFieldWrapper">
            <input
              placeholder="Search Product..."
              className="searchText"
              type="text"
              onChange={this.inputChangeHandler}
              ref={ref => {
                this.searchFor = ref;
              }}
            />
          </div>
          <div>
            <ListingProduct products={filteredData} />
          </div>
        </div>
      );
    }
  }
  return SearchComponent;
};

export default SearchFunctionHOC;
