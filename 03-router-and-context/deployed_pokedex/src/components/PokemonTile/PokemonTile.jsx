import React from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonTile.module.css";

const PokemonTile = ({ pokemonData }) => {
  return (
    <div className={styles.tile}>
      <h1>{pokemonData.name}</h1>
      <div className={styles.image_container}>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </div>
      <Link to={`/pokemon/${pokemonData.name}`}>See details</Link>
    </div>
  );
};

export default PokemonTile;
