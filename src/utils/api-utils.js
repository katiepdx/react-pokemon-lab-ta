export const fetchPokemon = async () => {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
  const data = await res.json()
  const pokemonArr = data.results
  return pokemonArr
}
