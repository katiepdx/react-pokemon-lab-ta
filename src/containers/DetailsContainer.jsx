import React, { Component } from 'react'
import DetailPage from '../components/DetailPage';
import Loading from '../components/Loading'

export default class DetailsContainer extends Component {
  state = {
    loading: false,
    data: {}
  }

  fetchPokemonById = async (pokemonId) => {
    this.setState({ loading: true })

    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemonId}`)
    const data = await res.json()
  
    this.setState({ data, loading: false })
  }
  
  
  async componentDidMount() {
    const id = this.props.match.params.pokemonId
    await this.fetchPokemonById(id)
  }
  render() {
    const { data, loading } = this.state
    return (
      <div>
        { loading && <Loading/>}
  
        { !loading && <DetailPage data={data}/>}
      </div>
    )
  }
}
