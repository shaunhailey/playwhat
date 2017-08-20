import React from 'react'
import Navbar from './Navbar.js'
import PlayList from './PlayList.js'
import '../App.css'
import '../index.css'

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
      <div className="App">
        <div className="container">
          <Header />
          <Navbar />
          <PlayList />
        </div>
      </div>
    )
  }
}

export default App
