import React from 'react'
import usePokemon from '../../context/PokemonContext'

const Search = () => {
  const { pokemonList, loadingPokemonList } = usePokemon();
  
  console.log("pokemonList ", pokemonList);
  
  return (
    // zastąpić klasy w cudzysłowiach klasami z modułu css
    <div className="search">
      {loadingPokemonList === "pending" && <h1>Loading...</h1>}
      {loadingPokemonList === "resolved" && <form>
        <select>
          {/* zmapować pokemonList do option, gdzie value={pokemon.url} i zawartość taga to pokemon.name */}
        </select>
        <button type="submit">SEARCH</button>
      </form>}
      {loadingPokemonList === "rejected" && <h1>Error!</h1>}
    </div>
  )
}

export default Search