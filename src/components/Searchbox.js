import React from 'react';

const Searchbox =({searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input
				className='tc pa3 ba bg-lightest-blue'
				type='search' 
				placeholder='Search Robots'
				onChange = {searchChange}
			 />
		</div>
	);
}

export default Searchbox;

