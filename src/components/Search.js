import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter pokemon name..."
  />
)

export default Search
