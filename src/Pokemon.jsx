import React, { Component } from 'react'
import { fetchPokemon } from './utils/api-utils'
import Loading from './components/Loading'
import SearchForm from './components/SearchForm'
import PokemonList from './components/PokemonList'

export default class Pokemon extends Component {
  state = {
    pokemonData: [],
    loading: false, 
    direction: 'asc',
    search: ''
  }

  async componentDidMount() {
    this.setState({ loading: true })
    
    const pokemonData = await fetchPokemon(this.state.search, this.state.direction)
    
    this.setState({
      pokemonData,
      loading: false
    })
  }

  // HANDLERS
  handleSearchChange = ({target}) => this.setState({ search: target.value })

  handleFilterChange = ({ target }) => this.setState({ direction: target.value })

  handleSearch = async(e) => {
    e.preventDefault()
    const pokemonData = await fetchPokemon(this.state.search, this.state.direction)
    this.setState({ pokemonData })
  }

  render() {
    const { loading, pokemonData } = this.state
    return (
      <div>
        { loading 
          ? 
          <Loading/>
          :
          <div className="App">
            <SearchForm 
              search={this.state.search} 
              handleSearchChange={this.handleSearchChange} 
              handleFilterChange={this.handleFilterChange} 
              handleSearch={this.handleSearch}
            />
            
            <PokemonList pokemonData={pokemonData}/>
          </div>
        }
      </div>
    )
  }
}
