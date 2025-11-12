import React, { use } from 'react';
import LatestHabit from './LatestHabit';

const LatestHabits = ({ latestProductPromise }) => {
	const latestHabits = use(latestProductPromise);
	console.log(latestHabits);
	return (
		<div>
			<h1 className="text-center font-bold text-3xl text-primary">
				Featured Habits
			</h1>
			<div className='grid grid-cols-3 gap-2'>
				{latestHabits.map(latestHabit => (
					<LatestHabit
						latestHabit={latestHabit}
						key={latestHabit.id}
					></LatestHabit>
				))}
			</div>
		</div>
	);
};

export default LatestHabits;
