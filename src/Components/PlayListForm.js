import React, { Component } from 'react'
import Navbar from './Navbar.js'
import PlayList from './PlayList.js'

class PlayListForm extends Component {
  state = {
    userName: '',
    songNotes: '',
    songArtist: '',
    songTitle: ''
  }

  handleUserName = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handlesongNotes = event => {
    this.setState({
      songNotes: event.target.value
    })
  }

  handlesongArtist = event => {
    this.setState({
      songArtist: event.target.value
    })
  }

  handlesongTitle = event => {
    this.setState({
      songTitle: event.target.value
    })
  }

  addToList = e => {
    e.preventDefault()
    let listItem = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response, 'yay')
      })
      .catch(err => {
        console.log(err, 'boo!')
      })
    this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' })
  }

  render() {
    return (
      <div className="PlayListForm">
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
        <button type="submit" name="button" onClick={this.addToList}>
          Submit
        </button>
      </div>
    )
  }
}

export default PlayListForm
