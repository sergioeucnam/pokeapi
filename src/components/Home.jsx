import React, { useContext, useEffect, useState } from 'react';
import Card from './Cards/Card';
import { PokemonContext } from './Context/PokemonContext';
import Navbar from './Navbar';
import Pagination from './Paginacion';

const Home = () => {
	const { pokemon, fetchPokemons } = useContext(PokemonContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [currentByPage] = useState(10);
	const totalPages = Math.ceil(pokemon?.length / currentByPage);
	useEffect(() => {
		if (pokemon.length === 0) {
			fetchPokemons();
		}
	}, []);

	return (
		<div className='bg-gradient-to-tr bg-indigo-400  vsm:block'>
			<Navbar />
			<div className='h-20' />
			<div className='vsm:grid vsm:grid-cols-1 vsm:gap-2 vsm:px-8 flex flex-col col-auto'>
				{pokemon
					.slice(
						(currentPage - 1) * currentByPage,
						(currentPage - 1) * currentByPage + currentByPage,
					)
					.map((pokemon, index) => {
						return (
							<Card
								pokemon={pokemon}
								index={index + 1}
								currentPage={currentPage}
							/>
						);
					})}
			</div>
			<div className='h-20' />
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default Home;
