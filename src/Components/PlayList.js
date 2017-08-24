import React, { Component } from 'react'
import PlayListItem from './PlayListItem.js'

class PlayList extends Component {
  state = {
    songs: []
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = e => {
    if (e) e.preventDefault()
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({ songs: data })
      })
  }
  render() {
    const playListItems = this.state.songs.map(song => <PlayListItem song={song} key={song._id} />)
    return (
      <div className="Playlist">
        <ul className="songListResults">
          {playListItems}
        </ul>
      </div>
    )
  }
}
export default PlayList
