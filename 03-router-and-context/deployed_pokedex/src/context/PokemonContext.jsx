import React, { useState, useEffect, useContext } from "react";

const PokemonContext = React.createContext();

const usePokemonData = () => {
  return useContext(PokemonContext);
};

export const PokemonContextProvider = ({ children }) => {
  const [data, setData] = useState({
    loadingPokemonList: "idle",
    loadingPokemonData: "idle",
    pokemonList: [],
    selectedPokemonUrl: null,
    pokemonData: null,
  });

  const getPokemonList = async () => {
    try {
      setData((prev) => ({ ...prev, loadingPokemonList: "pending" }));

      await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then((res) => res.json())
        .then((data) =>
          setData((prev) => ({
            ...prev,
            pokemonList: data.results,
            loadingPokemonList: "resolved",
          }))
        );
    } catch (e) {
      setData((prev) => ({ ...prev, loadingPokemonList: "rejected" }));
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonData = async () => {
    try {
      setData((prev) => ({ ...prev, loadingPokemonData: "pending" }));
      await fetch(data.selectedPokemonUrl)
        .then((res) => res.json())
        .then((data) =>
          setData((prev) => ({
            ...prev,
            pokemonData: data,
            loadingPokemonData: "resolved",
          }))
        );
    } catch (e) {
      setData((prev) => ({ ...prev, loadingPokemonData: "rejected" }));
    }
  };

  useEffect(() => {
    if (data.selectedPokemonUrl) {
      getPokemonData();
    }
  }, [data.selectedPokemonUrl]);

  const value = {
    ...data,
    setSelectedPokemonUrl: (url) => {
      setData((prev) => ({ ...prev, selectedPokemonUrl: url }));
    },
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export default usePokemonData;
