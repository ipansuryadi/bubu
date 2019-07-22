import React from 'react'
import ProductItem from '../ProductItem'

class ProductList extends React.Component {
  render() {
    const rows = [];
    this.props.products.forEach(product => {
      if (
        product.name.toLowerCase().includes(this.props.filterText.toLowerCase())
      ) {
        rows.push(<ProductItem {...product} key={product.name} />);
      }
    });
    return <div className="columns is-multiline is-mobile">{rows}</div>;
  }
}

export default ProductList