export const fetchPokemon = async (search, direction) => {
  const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${direction}&pokemon=${search}`)
  const data = await res.json()
  const pokemonArr = data.results
  return pokemonArr
}

export const fetchPokemonById = async (pokemonId) => {
  const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemonId}`)
  const data = await res.json()
  const pokemonObj = data

  return pokemonObj
}
