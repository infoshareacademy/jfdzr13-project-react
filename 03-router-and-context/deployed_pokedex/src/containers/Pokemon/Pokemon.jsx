import React, { useEffect } from "react";
import usePokemonData from "../../context/PokemonContext";
import { useParams } from "react-router-dom"
import styles from "./Pokemon.module.css";

const Pokemon = () => {
  const { pokemonData, loadingPokemonData, setSelectedPokemonUrl, pokemonList } = usePokemonData();
  const { pokemonName } = useParams();

  useEffect(() => {
    if (loadingPokemonData !== "resolved") {
      const pokemonUrl = pokemonList.find((pokemon) => pokemon.name === pokemonName);
      if (pokemonUrl) {
        setSelectedPokemonUrl(pokemonUrl.url);
      }
    }
  }, [pokemonList])

  if (loadingPokemonData === "rejected") return <h1>Error</h1>;
  if (loadingPokemonData !== "resolved") return <h1>Loading...</h1>;

  const {
    name,
    sprites,
    weight,
    height,
    types,
    abilities,
    stats,
    moves,
  } = pokemonData;

  return (
    <div className={styles.pokemon}>
      <div className={styles.presentation}>
        <h1>{name}</h1>
        <img src={sprites.front_default} alt={name} />
      </div>
      <ul className={styles.details}>
        <li><span>Weight:</span> {weight}</li>
        <li><span>Height:</span> {height}</li>
        <li><span>Types:</span> {types?.map(({ type }) => type.name).join(", ")}</li>
        <li><span>Abilities:</span> {abilities?.map(({ ability }) => ability.name).join(", ")}</li>
        <li><span>Stats:</span> {stats?.map(({ stat }) => stat.name).join(", ")}</li>
        <li><span>Moves:</span> {moves?.map(({ move }) => move.name).join(", ")}</li>
      </ul>
    </div>
  );
};


export default Pokemon;
