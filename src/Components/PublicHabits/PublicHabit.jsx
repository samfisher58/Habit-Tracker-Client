import React, { Suspense } from 'react';
import BrowsePublicHabits from './BrowsePublicHabits';
import Loading from '../Loading/Loading';
const publicHabitPromise = fetch('http://localhost:3000/publicHabits').then(
	res => res.json()
);
console.log(publicHabitPromise);

const PublicHabit = () => {
    return (
			<div>
				<Suspense fallback={ <Loading></Loading> }>
					<BrowsePublicHabits
						publicHabitPromise={publicHabitPromise}
					></BrowsePublicHabits>
				</Suspense>
			</div>
		);
};

export default PublicHabit;
