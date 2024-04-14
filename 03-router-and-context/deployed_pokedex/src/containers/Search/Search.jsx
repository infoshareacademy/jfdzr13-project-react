import React from "react";
import styles from "./Search.module.css";
import usePokemonData from "../../context/PokemonContext";
import PokemonTile from "../../components/PokemonTile/PokemonTile";

const Search = () => {
  const {
    pokemonList,
    loadingPokemonList,
    loadingPokemonData,
    setSelectedPokemonUrl,
    selectedPokemonUrl,
    pokemonData,
  } = usePokemonData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonUrl = e.target.select.value;
    setSelectedPokemonUrl(pokemonUrl);
  };

  return (
    <section className={styles.search}>
      <div className={styles.searchbar}>
        {loadingPokemonList === "pending" && <h1>Loading...</h1>}
        {loadingPokemonList === "resolved" && (
          <form onSubmit={handleSubmit}>
            <select name="select">
              {pokemonList.map((pokemon, idx) => (
                <option key={idx} value={pokemon.url}>
                  {pokemon.name}
                </option>
              ))}
            </select>
            <button type="submit">Search</button>
          </form>
        )}
        {loadingPokemonList === "rejected" && <h1>Something went wrong</h1>}
      </div>

      {loadingPokemonData !== "idle" && (
        <div className={styles.pokemonInfo}>
          {loadingPokemonData === "pending" && <h1>Loading...</h1>}
          {loadingPokemonData === "resolved" && (
            <PokemonTile pokemonData={pokemonData} />
          )}
          {loadingPokemonData === "rejected" && (
            <h1>We were not able to find that pokemon</h1>
          )}
        </div>
      )}
    </section>
  );
};

export default Search;
