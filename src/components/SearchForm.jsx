import React, { Component } from 'react'

export default class SearchForm extends Component {
  render() {
    const { search, handleSearchChange, handleFilterChange, handleSearch, direction } = this.props

    return (
      <section>
        <input value={search} onChange={handleSearchChange} placeholder="char..."></input>
        <select onChange={handleFilterChange} value={direction}>
          <option value={'asc'}>Asc</option>
          <option value={'desc'}>Desc</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </section>
    )
  }
}
