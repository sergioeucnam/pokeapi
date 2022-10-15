import React from 'react';

const Navbar = () => {
	return (
		<nav className='fixed w-full'>
			<div
				className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
				role='navigation'
			>
				<a href='/' className='pl-8'>
					PokeApi
				</a>
				<div className='px-4 cursor-pointer md:hidden'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</div>
				<div className='pr-8 md:block hidden'>
					<a href='/' className='p-4'>
						Home
					</a>
					<a href='/' className='p-4'>
						About
					</a>
					<a href='/' className='p-4'>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
