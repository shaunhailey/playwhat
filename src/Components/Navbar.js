import React, { Component } from 'react'
import PlayListForm from './PlayListForm.js'
import PlayList from './PlayList.js'

class Navbar extends Component {
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
      <div className="Navbar">
        <h1>Play What?</h1>
      </div>
    )
  }
}

export default Navbar
