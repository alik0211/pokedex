import React from 'react'

const Search = ({ onChange }) => (
  <div class="col-sm-12 col-md-6 col-lg-6">
    <form class="navbar-form" role="search">
      <input
        type="text"
        onChange={onChange}
        className="form-control"
        placeholder="Enter pokemon name..."
      />
    </form>
  </div>
)

export default Search
