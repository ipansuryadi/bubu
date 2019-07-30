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
    this.props.onClick(i)
    this.resizeBack(i)
  }
  resizeBack(i) {
    this.backRef.current.style.height = this.frontRef.current.offsetHeight + "px"
  }
  render() {
    const { name, image, id } = this.props;
    return (
      <div className="column is-3">
        <div className={this.props.active ? "flip-container flip" : "flip-container"}>
          <div className="flipper">
            <div className="card front" ref={this.frontRef}>
              <div className="card-header">
                <div className="card-header-title">
                  {name}
                </div>
              </div>
              <div onClick={() => this.itemClicked(id)}>
                <div className="card-image">
                  <figure className="image">
                    <img src={image} alt="" />
                  </figure>
                </div>
                <div className="card-content">
                  {id}{name}
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item is-hidden-mobile" />
                <div className="card-footer-item">
                  <div className="field has-addons">
                    <div className="control">
                      <a className="button is-warning is-small">
                        <span className="icon is-small">
                          <i className="fas fa-minus"></i>
                        </span>
                      </a>
                    </div>
                    <div className="control">
                      <input className="input is-small" type="text" />
                    </div>
                    <div className="control">
                      <a className="button is-info is-small">
                        <span className="icon is-small">
                          <i className="fas fa-plus"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="card back" ref={this.backRef}>
              <div className="card-header">
                <div className="card-header-title">
                  {name}
                </div>
              </div>
              <div className="card-content">
                {id}
              </div>
            </div>
            <div className="card inner_box ghost">
              <div className="card-header">
                <div className="card-header-title">
                  {name}
                </div>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img src={image} alt="" />
                </figure>
              </div>
              <div className="card-content">
                {id}{name}
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  button disini
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem