import React, { Component } from 'react'

export default class DetailPage extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="pokemon-item">
        <p>Pokemon Name: {data.pokemon}</p>
        <img src={data.url_image} alt={data.pokemon}/>
        <p>Ability 1: {data.ability_1}</p>
        <p>Attack: {data.attack}</p>
        <p>Defense: {data.defense}</p>
        <p>Egg Group 1: {data.egg_group_1}</p>
        <p>Height: {data.height}</p>
        <p>Hp: {data.hp}</p>
        <p>Special Attack: {data.special_attack}</p>
        <p>Special Defense: {data.special_defense}</p>
        <p>Species ID: {data.species_id}</p>
        <p>Type 1: {data.type_1}</p>
        <p>Type 2: {data.type_2}</p>
        <p>Weight: {data.weight}</p>

      </div>
    )
  }
}
