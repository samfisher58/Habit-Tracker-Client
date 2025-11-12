import React from 'react';
import LatestHabits from '../../LatestHabits/LatestHabits';
const latestProductPromise = fetch('http://localhost:3000/latest-habits').then(
	res => res.json()
);
const Home = () => {
    return (
			<div>				
					<LatestHabits
						latestProductPromise={latestProductPromise}
					></LatestHabits>				
			</div>
		);
};

export default Home;