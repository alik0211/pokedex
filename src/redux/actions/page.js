import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS
} from '../constants/page'
import mockData from './data/mock'
const isMock = true

function setPokemons(data) {
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })

  return {
    type: SET_POKEMONS,
    payload: pokemons
  }
}

export function getPokemons() {
  return dispatch => {
    dispatch({
      type: GET_POKEMONS_REQUEST
    })
    if (isMock) {
      dispatch({
        type: GET_POKEMONS_SUCCESS
      })
      mockData.results = mockData.results.slice(1, 10)
      dispatch(setPokemons(mockData))
      dispatch(filterPokemons())
    } else {
      return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=4&offset=1`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }

          throw new Error(`${response.status}: ${response.statusText}`)
        })
        .then(data => {
          dispatch({
            type: GET_POKEMONS_SUCCESS
          })
          dispatch(setPokemons(data))
          dispatch(filterPokemons())
        })
        .catch(error => {
          dispatch({
            type: GET_POKEMONS_FAIL,
            payload: error.message
          })
        })
    }
  }
}

export function filterPokemons(searchString = '') {
  return (dispatch, getState) => {
    const displayedPokemons = getState().page.pokemons.filter(pokemon => {
      return pokemon.name.includes(searchString.toLowerCase())
    })

    dispatch({
      type: FILTER_POKEMONS,
      payload: displayedPokemons
    })
  }
}
