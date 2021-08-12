import { getCharacters } from '../slices/characters.slice'

export const getCharactersRequest = (dispatch) => {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      if (response.status === 200) {
        response.json().then((jsonResponse) => {
          dispatch(getCharacters(jsonResponse.results))
        })
      }
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}

export const getCharacter = (id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
}
