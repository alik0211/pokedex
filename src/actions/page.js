import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  SET_POKEMONS,
  FILTER_POKEMONS
} from '../constants/page'

function setPokemons(data) {
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })

  return {
    type: SET_POKEMONS,
    pokemons
  }
}

export function getPokemons() {
  return dispatch => {
    dispatch({
      type: GET_POKEMONS_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_POKEMONS_SUCCESS
        })
        dispatch(setPokemons(data))
        dispatch(filterPokemons('', 60))
      })
  }
}

export function filterPokemons(searchString, limit) {
  return (dispatch, getState) => {
    const displayedPokemons = getState()
      .page.pokemons.filter(pokemon => {
        return pokemon.name.includes(searchString.toLowerCase())
      })
      .slice(0, limit)

    dispatch({
      type: FILTER_POKEMONS,
      displayedPokemons
    })
  }
}
