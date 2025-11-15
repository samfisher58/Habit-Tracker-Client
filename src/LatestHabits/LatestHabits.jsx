import React, { use } from 'react';
import LatestHabit from './LatestHabit';

const LatestHabits = ({ latestHabitPromise }) => {
	const latestHabits = use(latestHabitPromise);
	
	return (
		<div>
			<h1 className="text-center font-bold text-3xl my-5">
				<span className="text-primary">Featured</span> <span className='text-secondary' >Habits</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
				{latestHabits.map(latestHabit => (
					<LatestHabit
						latestHabit={latestHabit}
						key={latestHabit._id}
					></LatestHabit>
				))}
			</div>
		</div>
	);
};

export default LatestHabits;
