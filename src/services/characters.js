export const getCharacters = () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      if (response && response.results) {
      }
    })
    .catch((error) => {
      this.setState({ errorMessage: error.message })
      console.error('There was an error!', error)
    })
}

export const getCharacter = (id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) =>
      this.setState({ totalReactPackages: response.data.total }),
    )
    .catch((error) => {
      this.setState({ errorMessage: error.message })
      console.error('There was an error!', error)
    })
}
