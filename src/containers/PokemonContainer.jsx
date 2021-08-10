import React, { Component } from 'react'
import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import PokemonList from '../components/PokemonList'

export default class Pokemon extends Component {
  state = {
    pokemonData: [],
    loading: false, 
    direction: 'asc',
    search: '',
    page: 1,
    totalPages: null
  }

  fetchPokemon = async () => {
    const { search, direction, page } = this.state

    this.setState({ loading: true })
    
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${direction}&pokemon=${search}&page=${page}`)
    const pokemonData = await res.json()
    
    await this.setState({
      pokemonData: pokemonData.results,
      loading: false,
      totalPages: Math.ceil(pokemonData.count / pokemonData.perPage), 
    })
  }

  async componentDidMount() {
    this.fetchPokemon()
  }

  // HANDLERS
  handleSearchChange = ({target}) => this.setState({ search: target.value })

  handleFilterChange = ({ target }) => this.setState({ direction: target.value })

  handleSearch = async(e) => {
    e.preventDefault()
    await this.setState({ page: 1})
    this.fetchPokemon()
  }

  // button handlers
  handlePrevClick = async(e) => {
    e.preventDefault()
    await this.setState({ page: this.state.page - 1})
    this.fetchPokemon()
  }
  handleNextClick = async(e) => {
    e.preventDefault()
    await this.setState({ page: this.state.page + 1})
    this.fetchPokemon()
  }

  render() {
    const { loading, search, direction, pokemonData, page, totalPages } = this.state
    return (
      <div>
        { loading 
          ? 
          <Loading/>
          :
          <div className="App">
            <p>Current Page: {page}</p>
            <p>Total Pages: {totalPages}</p>

            {/* conditionally render the buttons */}
            <section>
              {/* if current page is greater than 1, show previous */}
              {page > 1 && <button onClick={this.handlePrevClick}>Prev</button>}
              
              {/* if current page is less than the total amt of pages, show the next button */}
              {page < totalPages && <button onClick={this.handleNextClick}>Next</button>}
            </section>

            <SearchForm 
              search={search}
              direction={direction} 
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
