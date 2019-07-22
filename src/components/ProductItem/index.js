import React from 'react'

class ProductItem extends React.Component {
  constructor(props) {
    super(props)
    this.itemClicked = this.itemClicked.bind(this)
    this.itemReset = this.itemReset.bind(this)
    this.state = { isClicked: false }
  }
  itemClicked(e) {
    this.setState({ isClicked: !this.state.isClicked })
  }
  itemReset(e) {
    this.setState({ isClicked: false })
  }
  render() {
    const { name, image } = this.props;

    return (
      <div className="column is-3">
        <div className={this.state.isClicked ? 'flip-container flip' : 'flip-container'} onClick={this.itemClicked} onMouseLeave={this.itemReset}>
          <div className="flipper">
            <div className="box front">
              {name}
              <figure class="image">
                <img src={image} alt="" />
              </figure>
            </div>
            <div className="box back">
              back
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem