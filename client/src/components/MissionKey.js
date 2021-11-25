import React from 'react';

const MissionKey = () => {
	return (
		<div className='my-3'>
			<p>
				<span className='px-3 mr-2 bg-success' style={{ marginRight: '3px' }} />{' '}
				= Success
			</p>
			<p>
				<span className='px-3 mr-2 bg-danger' style={{ marginRight: '3px' }} />{' '}
				= Danger
			</p>
		</div>
	);
};

export default MissionKey;
