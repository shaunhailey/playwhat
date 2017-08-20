import PlayListItem from './PlayListItem.js'

fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
  .then(results => {
    return results.json()
  })
  .then(data => {
    this.setState({ songs: data })
    console.log('state', this.state.songs)
  })

fetchData = e => {
  e.preventDefault()
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json()
    })
    .then(data => {
      this.setState({ songs: data })
    })
}
