import React from 'react';

const Loader = () => {
	return (
		<div className='flex justify-center items-center w-full h-screen vsm:h-[80vh]'>
			<div className='animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900' />
		</div>
	);
};

export default Loader;
