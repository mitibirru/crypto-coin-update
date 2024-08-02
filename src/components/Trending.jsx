import React from 'react';
import useAxios from '../hooks/useAxios';

const Trending = () => {
	const { response } = useAxios('/api/v3/search/trending');
	console.log(response);
	return (
		<div className="mt-8">
			<h1 className="text-2xl mb-2">Trending</h1>
			{/* {response && response .coins.map(coin =>)} */}
		</div>
	);
};

export default Trending;
