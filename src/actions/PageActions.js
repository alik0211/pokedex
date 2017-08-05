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
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results
  }
}

export function fetchPokemons() {

  return dispatch => {
    dispatch(requestPokemons())
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(json)))
  }

}

export function filterPokemons(searchTerm) {
  return {
    type: FILTER_POKEMONS,
    searchTerm
  }
}
