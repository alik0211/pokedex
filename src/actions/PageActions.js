import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  REQUEST_SELECTED_POKEMON,
  RECEIVE_SELECTED_POKEMON
} from '../constants/Pokemon'

function requestPokemons(offset) {
  return {
    type: REQUEST_POKEMONS,
    offset
  }
}

function receivePokemons(offset, json) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results.map(pokemon => pokemon)
  }
}

export function fetchPokemons(offset) {

  return dispatch => {
    dispatch(requestPokemons(offset))
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(offset, json)))
  }

}

function requestSelectedPokemon() {
  return {
    type: REQUEST_SELECTED_POKEMON
  }
}

function receiveSelectedPokemon(json) {
  return {
    type: RECEIVE_SELECTED_POKEMON,
    selectedPokemon: json
  }
}

export function fetchSelectedPokemon(id) {

  return dispatch => {
    dispatch(requestSelectedPokemon())
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSelectedPokemon(json)))
  }

}
