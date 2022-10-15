import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ pokemon, index, currentPage }) => {
	const navigate = useNavigate();
	const [sprite, setSprite] = useState(null);
	const [numeroPokedex, setnumeroPokedex] = useState(0);
	const [types, setTypes] = useState(null);
	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	const fetchPokemonData = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
		);
		const {
			sprites: { front_default: sprite },
			types,
			id,
		} = await response.json();
		// console.log(types, 'response data csm');
		setSprite(sprite);
		setTypes(types);
		setnumeroPokedex(id);
		// console.log(sprite, 'datirodactilo');
	};
	useEffect(() => {
		fetchPokemonData();
	}, [currentPage]);
	console.log(index);
	return (
		<div
			onClick={() => navigate(`/details/${numeroPokedex}`)}
			className='vsm:flex bg-white h-20 w-20 mt-8 vsm:w-full vsm:h-[200px] rounded-xl grid grid-cols-3 vsm:grid-cols-1 vsm:grid-rows-2 vsm:grid-flow-col gap-4 cursor-pointer'
		>
			<div className='vsm:w-full justify-center grid '>
				<header>
					<h1 className='font-bold text-xl mx-4'>{capitalize(pokemon.name)}</h1>
				</header>
				<div className='flex bg-white w-full justify-center'>
					<img src={sprite} alt={pokemon.name} className='w-1/2' />
					<h1 className='font-bold text-xl'>Pokedex #{numeroPokedex}</h1>
				</div>
				<footer>
					<div className='w-full bg-white'>
						<p className='font-bold text-xl text-center'>
							{`Type${types?.length > 1 ? `s` : ``}: ${types
								?.map((type) => capitalize(type.type.name))
								.join(' / ')}`}
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Card;
