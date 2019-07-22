import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(e) {
    if (e.key === 'Enter' || e.target.className.includes('button'))
      this.props.onFilterTextChange(this.searchInput.value);
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-full field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              onKeyPress={this.handleFilterTextChange}
              ref={ref => {
                this.searchInput = ref;
              }}
              placeholder="What item?"
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={this.handleFilterTextChange}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar