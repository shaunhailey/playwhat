import React, { Component } from 'react'
import Navbar from './Navbar.js'
import PlayList from './PlayList.js'
import PlayListForm from './PlayListForm.js'
import PlayListItem from './PlayListItem'
import '../Styles/App.css'
import '../Styles/index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  render() {
    return (
      <div id="root" className="root">
        <div className="container">
          <Navbar />
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    )
  }
}

export default App
