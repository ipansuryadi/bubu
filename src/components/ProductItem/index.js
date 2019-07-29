import React from 'react'

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.itemClicked = this.itemClicked.bind(this);
    this.state = { width: 0, height: 0 };
    this.frontRef = React.createRef();
    this.backRef = React.createRef();
  }
  itemClicked(i) {
    this.resizeBack()
    console.log(i)
    this.props.onClick(i)
  }
  resizeBack() {
    // const { width, height } = this.state
    this.backRef.current.style.height = this.frontRef.current.offsetHeight + "px";
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimension())
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimension())
  }
  updateWindowDimension() {
    this.setState({ width: window.outerWidth, height: window.outerHeight })
  }
  render() {
    const { name, image, id } = this.props;
    return (
      <div className="column is-3">
        <div className={this.props.active ? "flip-container flip" : "flip-container"} onClick={() => this.itemClicked(id)}>
          <div className="flipper">
            <div className="front" ref={this.frontRef}>
              <figure className="image">
                <img src={image} alt="" />
              </figure>
            </div>

            <div className="back" ref={this.backRef}>
              {name}
            </div>
            <div className="inner_box ghost">
              <figure className="image">
                <img src={image} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem