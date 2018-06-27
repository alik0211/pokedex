import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  FILTER_POKEMONS
} from '../constants/page'

function getPokemons() {
  return {
    type: GET_POKEMONS_REQUEST
  }
}

function setPokemons(json) {
  const pokemons = json.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })

  return {
    type: GET_POKEMONS_SUCCESS,
    pokemons
  }
}

export function fetchPokemons() {
  return dispatch => {
    dispatch(getPokemons())

    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(response => response.json())
      .then(json => {
        dispatch(setPokemons(json))
        dispatch(filterPokemons(''))
      })
  }
}

export function filterPokemons(searchTerm) {
  return (dispatch, getState) => {
    const displayedPokemons = getState()
      .page.pokemons.filter(pokemon => {
        return pokemon.name.includes(searchTerm.toLowerCase())
      })
      .slice(0, 60)

    dispatch({
      type: FILTER_POKEMONS,
      displayedPokemons
    })
  }
}
