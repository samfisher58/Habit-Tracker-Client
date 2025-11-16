import React, { Suspense } from 'react';
import BrowsePublicHabits from './BrowsePublicHabits';
import Loading from '../Loading/Loading';
const publicHabitPromise = fetch(
	'https://habit-tracker-server-api.vercel.app/publicHabits'
).then(res => res.json());

const PublicHabit = () => {
	return (
		<div>
			<Suspense fallback={<Loading></Loading>}>
				<BrowsePublicHabits
					publicHabitPromise={publicHabitPromise}
				></BrowsePublicHabits>
			</Suspense>
		</div>
	);
};

export default PublicHabit;
