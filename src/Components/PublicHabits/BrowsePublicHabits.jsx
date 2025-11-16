import React, { use } from 'react';
import PublicHabitCard from './PublicHabitCard';

const BrowsePublicHabits = ({ publicHabitPromise }) => {
    const publicHabits = use(publicHabitPromise);
    
	
	
	return (
		<div className='my-5'>
			<h1 className='text-3xl text-center font-bold my-5'>
				<span className="text-primary">Browse other's </span>
				<span className='text-secondary'>habits</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{publicHabits.map(habit => (
					<PublicHabitCard key={habit._id} habit={habit}></PublicHabitCard>
				))}
			</div>
		</div>
	);
};

export default BrowsePublicHabits;