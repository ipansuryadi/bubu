import React from 'react'
import SearchBar from '../SearchBar'
import ProductList from '../ProductList'

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "" };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }
  render() {
    const PRODUCTS = [
      { name: "this", image: "https://picsum.photos/240/120?random=1" },
      { name: "that", image: "https://picsum.photos/240/120?random=2" },
      { name: "already", image: "https://picsum.photos/240/120?random=3" },
      { name: "exist", image: "https://picsum.photos/240/120?random=4" },
      { name: "lol", image: "https://picsum.photos/240/120?random=5" }
    ];
    return (
      <div className="section">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductList filterText={this.state.filterText} products={PRODUCTS} />
      </div>
    );
  }
}

export default ProductPage