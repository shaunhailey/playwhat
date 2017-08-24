import React, { Component } from 'react'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className="songList">
        <div className="songData">
          <h4 className="userName">
            {this.props.song.userName}
          </h4>
          <h4 className="songNotes">
            songNotes: {this.props.song.songNotes}
          </h4>
          <h4 className="songArtist">
            songArtist: {this.props.song.songArtist}
          </h4>
          <h4 className="songTitle">
            songTitle: {this.props.song.songTitle}
          </h4>
        </div>
      </li>
    )
  }
}
export default PlayListItem
