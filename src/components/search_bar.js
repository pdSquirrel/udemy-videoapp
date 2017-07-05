import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return(
      <div>
        {/* set the state */}
        <input onChange={event => this.setState({ term: event.target.value })} />
        <br />
        {/* read the state */}
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
