import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCDGBsTO0UkEzYlYjivYDU_6Z1AOQRtguM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: []
    };

    /* initial search */
    YTSearch({key: API_KEY, term: 'path of exile'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
