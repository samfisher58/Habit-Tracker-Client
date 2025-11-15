import React, { use } from 'react';
import PublicHabitCard from './PublicHabitCard';

const BrowsePublicHabits = ({ publicHabitPromise }) => {
    const publicHabits = use(publicHabitPromise);
    
	
	
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
			{publicHabits.map(habit => (
				<PublicHabitCard
					key={habit._id}
					
					habit={habit}
				></PublicHabitCard>
			))}
		</div>
	);
};

export default BrowsePublicHabits;