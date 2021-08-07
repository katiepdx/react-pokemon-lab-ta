import React, { Component } from 'react'
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {
  render() {
    const { pokemonData } = this.props
    return (
      <section className='pokemon-list'>
        {pokemonData.map(pokemon => <PokemonItem key={pokemon._id} pokemon={pokemon} />)}
      </section>
    )
  }
}
