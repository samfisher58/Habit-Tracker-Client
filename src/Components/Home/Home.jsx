import React, { Suspense } from 'react';
import LatestHabits from '../../LatestHabits/LatestHabits';
import Loading from '../Loading/Loading';
const latestHabitPromise = fetch('http://localhost:3000/latest-habits').then(
	res => res.json()
);
const Home = () => {
    return (
			<div>
				<Suspense fallback={<Loading></Loading>}>
					<LatestHabits latestHabitPromise={latestHabitPromise}></LatestHabits>
				</Suspense>
			</div>
		);
};

export default Home;