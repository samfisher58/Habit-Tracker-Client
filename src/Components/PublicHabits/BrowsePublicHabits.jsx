import React, { use, useState } from 'react';
import PublicHabitCard from './PublicHabitCard';

const BrowsePublicHabits = ({ publicHabitPromise }) => {
    const publicHabits = use(publicHabitPromise);
    console.log(publicHabits);
	const [habits,setHabits] = useState(publicHabits)
	console.log(habits);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
			{publicHabits.map(habit => (
				<PublicHabitCard
					key={habit._id}
					setHabits={setHabits}
					habit={habit}
				></PublicHabitCard>
			))}
		</div>
	);
};

export default BrowsePublicHabits;