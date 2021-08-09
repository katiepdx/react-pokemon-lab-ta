import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokemonItem extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <Link to={`/pokemon/${pokemon._id}`}>
        <div className='pokemon-item'>
          <p>{pokemon.pokemon}</p>
          <img src={pokemon.url_image} alt={pokemon.pokemon}/>
        </div>
      </Link>
    )
  }
}
