import React, { useState, useEffect, useContext } from "react";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";

const PokemonContext = React.createContext();

const usePokemon = () => {
	return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
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
			await fetch(BASE_URL)
				.then((res) => res.json())
				.then(({ results }) => setData((prev) => ({
                    ...prev,
                    pokemonList: results,
                    loadingPokemonList: "resolved"
                })));
		} catch (e) {
			setData((prev) => ({ ...prev, loadingPokemonList: "rejected" }));
		}
	};

	useEffect(() => {
		getPokemonList();
	}, []);

	const value = {
		...data,
		setSelectedPokemonUrl: (url) => {
			setData((prev) => ({ ...prev, selectedPokemonUrl: url }));
		},
	};

	return (
		<PokemonContext.Provider value={value}>
			{children}
		</PokemonContext.Provider>
	);
};

export default usePokemon;
