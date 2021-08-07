import React, { Component } from 'react'

export default class PokemonItem extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <div className='pokemon-item'>
        <p>{pokemon.pokemon}</p>
        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
      </div>
    )
  }
}
