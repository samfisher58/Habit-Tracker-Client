import React, { Suspense } from 'react';
import LatestHabits from '../../LatestHabits/LatestHabits';
import Loading from '../Loading/Loading';
import HomeContent from '../HomeContent/HomeContent';
const latestHabitPromise = fetch('http://localhost:3000/latest-habits').then(
	res => res.json()
);
const Home = () => {
    return (
			<div>
				<HomeContent></HomeContent>
				<Suspense fallback={<Loading></Loading>}>
					<LatestHabits latestHabitPromise={latestHabitPromise}></LatestHabits>
				</Suspense>
			</div>
		);
};

export default Home;