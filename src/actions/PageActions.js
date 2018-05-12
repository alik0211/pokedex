import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS
} from '../constants/Page'

function requestPokemons() {
  return {
    type: REQUEST_POKEMONS
  }
}

function receivePokemons(json) {
  const pokemons = json.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })

  return {
    type: RECEIVE_POKEMONS,
    pokemons
  }
}

export function fetchPokemons() {
  return dispatch => {
    dispatch(requestPokemons())

    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePokemons(json))
        dispatch(filterPokemons(''))
      })
  }
}

export function filterPokemons(searchTerm) {
  return (dispatch, getState) => {
    const displayedPokemons = getState()
      .page.pokemons.filter(pokemon => {
        if (pokemon.name.includes(searchTerm.toLowerCase())) {
          return true
        }

        return false
      })
      .slice(0, 60)

    dispatch({
      type: FILTER_POKEMONS,
      displayedPokemons
    })
  }
}
