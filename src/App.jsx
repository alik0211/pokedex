import React, { useState, useEffect } from 'react'
import hardtack from 'hardtack'
import Pokemon from './components/pokemon.jsx'
import Search from './components/search.jsx'
import ga from './utils/ga.js'
import api from './utils/api.js'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchString, setSearchString] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const searchString = hardtack.get('searchString') || ''
    setIsLoading(true)
    setSearchString(searchString)
  }, [])

  api
    .getPokemons()
    .then(pokemons => {
      setPokemons(pokemons)
    })
    .catch(error => {
      setError(error.message)
    })
    .finally(() => {
      setIsLoading(false)
    })

  ga.pageview(window.location.pathname + window.location.search)

  const handleSearchChange = event => {
    const value = event.currentTarget.value.toLowerCase().trim()

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    })

    setSearchString(value)
  }

  const renderPokemonList = () => {
    const pokemonList = []

    pokemons.forEach(pokemon => {
      if (!pokemon.name.includes(searchString)) {
        return
      }

      pokemonList.push(
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return <ul className="pokemons">{pokemonList}</ul>
  }

  return (
    <div className="page">
      {error && <div className="page__error">{error}</div>}
      <div className="page__search">
        <Search onChange={handleSearchChange} value={searchString} />
      </div>
      {isLoading ? <p>Loading...</p> : renderPokemonList()}
    </div>
  )
}
