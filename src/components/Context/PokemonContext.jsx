import { createContext, useState } from 'react';

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pokemonCount, setPokemonCount] = useState(0);

	const fetchPokemons = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				'https://pokeapi.co/api/v2/pokemon?limit=151',
			);
			const { results } = await response.json();
			setPokemon(results);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<PokemonContext.Provider
			value={{ fetchPokemons, pokemon, pokemonCount, loading }}
		>
			{children}
		</PokemonContext.Provider>
	);
};
