import React from 'react'
import ProductItem from '../ProductItem'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: []
    }
    this.onItemClick = this.onItemClick.bind(this)
  }
  onItemClick(i) {
    this.reset(i)
  }
  componentDidMount() {
    this.reset()
  }
  reset(i = undefined) {
    let active = []
    this.props.products.forEach(product => {
      active.push(false)
    })
    if (i !== undefined) {
      active[i] = true
    }
    this.setState({
      active: active
    })
  }
  render() {
    const rows = [];
    this.props.products.forEach((product, i) => {
      if (
        product.name.toLowerCase().includes(this.props.filterText.toLowerCase())
      ) {
        rows.push(< ProductItem {
          ...product
        }
          active={
            this.state.active[i]
          }
          onClick={
            () => this.onItemClick(i)
          }
          key={i}
          id={i}
        />);
      }
    });
    return <div className="columns is-multiline is-mobile" > {
      rows
    } < /div>;
                                        }
                                      }
                                    
    export default ProductList