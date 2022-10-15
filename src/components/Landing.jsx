import React, { useContext, useEffect } from 'react';
import Loader from './helpers/Loader';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from './Context/PokemonContext';
const Landing = () => {
	const navigate = useNavigate();
	const { fetchPokemons, pokemon } = useContext(PokemonContext);
	const redirect = () => {
		setTimeout(() => {
			navigate('/home');
		}, 5000);
	};
	useEffect(() => {
		fetchPokemons();
		redirect();
	}, []);
	return (
		<div className='bg-gray-800 flex w-full h-[86vh]'>
			<div className='flex flex-col justify-center items-center  vsm:w-full mb-4'>
				<Loader />
				<img
					src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
					alt='Pokeball'
					className=' w-1/5'
				/>
				<h1 className='text-6xl text-white font-bold'>PokeApi</h1>
			</div>
		</div>
	);
};

export default Landing;
