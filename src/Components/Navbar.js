import React, { Component } from 'react'
import PlayListForm from './PlayListForm.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: [],
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  render() {
    return (
      <input
        onChange={this.handleUserName}
        type="text"
        className="form-control"
        id="user"
        placeholder="Name or User Name"
        value={this.state.userName}
      />
      <input
        onChange={this.handlesongArtist}
        type="text"
        className="form-control"
        id="user"
        placeholder="Artist or Band Name"
        value={this.state.songArtist}
      />
      <input
        onChange={this.handlesongTitle}
        type="text"
        className="form-control"
        id="user"
        placeholder="Song Title"
        value={this.state.songTitle}
      />
      <input
        onChange={this.handlesongNotes}
        type="text"
        className="form-control"
        id="user"
        placeholder="Notes about song"
        value={this.state.songNotes}
      />
      <button
      type="submit"
      name="button"
      >Submit
      />
    )
  }
}

export default Navbar
