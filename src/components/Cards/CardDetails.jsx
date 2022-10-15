import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../helpers/Loader';
const CardDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [details, setDetails] = useState(null);
	const fetchPokemonDetails = async () => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const { height, weight, name, sprites, types } = await response.json();
			setDetails({ height, weight, name, sprites, types });
		} catch (error) {}
	};
	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	useEffect(() => {
		fetchPokemonDetails();
		return () => {
			setDetails(null);
		};
	}, []);

	return (
		<div className='w-full flex h-[88vh] bg-gray-200 p-4'>
			<div className='bg-white w-full mx-auto mb-4 rounded-xl'>
				<h1 className='font-bold text-center text-xl'>Pokemon Details</h1>
				<div>
					{details ? (
						<div className='bg-indigo-200 rounded-xl'>
							<div className='w-full'>
								<img
									className='h-40 w-40 mx-auto'
									src={details.sprites.front_default}
									alt='pokemon'
								/>
							</div>
							<div className='bg-white rounded-sm'>
								<p className='text-3xl mx-4 my-10'>
									Name: {capitalize(details?.name)}
								</p>
								<p className='text-3xl mx-4 my-10'>
									{`Type${
										details?.types?.length > 1 ? `s` : ``
									}: ${details?.types
										?.map((type) => capitalize(type.type.name))
										.join(' / ')}`}
								</p>

								<p className='text-3xl mx-4 my-10'>Height: {details.height}</p>
								<p className='text-3xl mx-4 my-10'>Weight: {details.weight}</p>
							</div>
						</div>
					) : (
						<Loader />
					)}
				</div>
				<footer className='w-full flex px-10 '>
					<div
						onClick={() => navigate(-1)}
						className='flex w-full bg-white rounded-xl justify-evenly h-14 py-4 cursor-pointer'
					>
						<div className='flex w-4/5 justify-center'>
							<span className='font-bold'>Volver a inicio</span>
						</div>
						<div className='flex w-1/5 justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
								/>
							</svg>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default CardDetails;
