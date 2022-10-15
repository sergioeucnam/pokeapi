import React, { useState } from 'react';

export default function Pagination({
	currentPage,
	setCurrentPage,
	totalPages,
}) {
	const [input, setInput] = useState();
	const nextPage = () => {
		setInput(input + 1);
		setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		setInput(input - 1);
		setCurrentPage(currentPage - 1);
	};

	return (
		<div className='fixed w-full bg-white bottom-0 h-14 justify-center'>
			<div className='flex justify-center h-full items-center'>
				<div>
					<button
						className={`mx-4 ${currentPage === 1 ? 'opacity-0' : ''}`}
						disabled={currentPage === 1}
						onClick={prevPage}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-10 h-10'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
							/>
						</svg>
					</button>
				</div>
				<label className='text-center font-bold text-xl'>{`Page ${currentPage} of ${totalPages}`}</label>
				<div>
					<button
						className={`mx-4 ${currentPage === totalPages ? 'opacity-0' : ''}`}
						disabled={currentPage === totalPages}
						onClick={nextPage}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-10 h-10'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
