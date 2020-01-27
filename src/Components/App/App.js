import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { PlayList } from '../PlayList/PlayList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'track1', artist: 'artist1', album: 'album1', id: 1 }, { name: 'track2', artist: 'artist2', album: 'album2', id: 2 }, { name: 'track3', artist: 'artist3', album: 'album3', id: 3 }],
      playlistName: 'Playlist Name',
      playlistTracks: [{ name: 'track4', artist: 'artist4', album: 'album4', id: 4}]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
