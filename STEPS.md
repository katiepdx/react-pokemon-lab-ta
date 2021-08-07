# Pokemon Steps 

## Goal: Display Pokemon (from api fetch) on screen
- User can view all pokemon on page load
- User can search for a pokemon by name using the input bar
- User can sort the pokemon using a dropdown (asc/desc)

## Steps
- DISPLAY POKEMON 
- Build out components with placeholder text to make sure everything is connected
- create api fetch function in appjs then extract it out to a file once it's working
  - add to appjs componentDidMount
  - console.log the data
  - add state pokemonData
  - save api res from componentDidMount to state
- add loading state to state 
  - toggle loading during fetch and add loading message
  - conditionally render loading or pokemonData in appjs 
- pass pokemonData from state to list component
  - map over data in list and use item component
- add basic styles

- SEARCH & SORT
- create dropdown with asc and desc
  - update api fetch to `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&pokemon=${search}&direction=${direction}` 
  - create SearchForm component with input and dropdown - add onChange and onClick - pass props


## Files Needed
- App.js
  - Components:
    - Header.jsx
    - Loading.jsx
    - SearchForm.jsx
    - PokemonList.jsx
      - PokemonItem.jsx
  - State:
    - Pokemon
    - search query
    - filter (asc or desc)
    - loading false
  - Handlers
    - onChange for search query
    - handleSearch - click search button after adding 'search' and filter
  - Life Cycle Methods
    - componentsDidMount
      - set loading to true 
      - fetch unfiltered Pokemon from API and save to state
      - set loading to false
- api-utils.js - API fetch fetchPokemon()
- Header.jsx - Header component
- PokemonList.jsx - maps and uses PokemonItem.jsx
  - prop: pokemonData to PokemonList && single pokemon to PokemonItem
- SearchForm.jsx 
