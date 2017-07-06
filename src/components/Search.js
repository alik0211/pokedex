import React from 'react'

const Search = ({
  onChange,
  term
}) => (
  <input
    className="user-input form-control"
    type="text"
    onChange={onChange}
    value={term}
    placeholder="Enter pokemon name..."
  />
)

export default Search
