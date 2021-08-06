import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import PokemonList from './components/PokemonList';
import SearchForm from './components/SearchForm';
import { fetchPokemon } from './utils/api-utils';
export default class App extends Component {
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
    <div className="App">
      <Header/>
      <SearchForm 
        search={this.state.search} 
        handleSearchChange={this.handleSearchChange} 
        handleFilterChange={this.handleFilterChange} 
        handleSearch={this.handleSearch}
      />
      
      {loading ? <Loading/> : <PokemonList pokemonData={pokemonData}/>}
    </div>
    )
  }
}
