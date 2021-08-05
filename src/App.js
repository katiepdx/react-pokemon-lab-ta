import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import PokemonList from './components/PokemonList';
import { fetchPokemon } from './utils/api-utils';
export default class App extends Component {
  state = {
    pokemonData: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const pokemonData = await fetchPokemon()
    
    this.setState({
      pokemonData,
      loading: false
    })
  }
  render() {
    const { loading, pokemonData } = this.state
    return (
    <div className="App">
      <Header/>
      {loading ? <Loading/> : <PokemonList pokemonData={pokemonData}/>}
    </div>
    )
  }
}
