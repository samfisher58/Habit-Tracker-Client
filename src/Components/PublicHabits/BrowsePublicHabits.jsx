import React, { use, useState } from 'react';
import PublicHabitCard from './PublicHabitCard';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const BrowsePublicHabits = ({ publicHabitPromise }) => {
	const publicHabits = use(publicHabitPromise);
	const [habitData, setHabitData] = useState(publicHabits);
	const [loading, setLoading] = useState(false);

	const handleSearch = e => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		console.log(searchValue);
		setLoading(true);
		fetch(
			`https://habit-tracker-server-api.vercel.app/search?search=${searchValue}`
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setHabitData(data);
				setLoading(false);
			})
			.catch(() => {
				toast.error('no match found');
			});
	};

	if (loading) {
		return <Loading></Loading>;
	}

	return (
		<div className="my-5">
			<h1 className="text-3xl text-center font-bold my-5">
				<span className="text-primary">Browse other's </span>
				<span className="text-secondary">habits</span>
			</h1>
			{/* -------------------------------------------- */}
			<div className="flex gap-3 justify-between items-center my-5">
				{/* search */}
				<form onSubmit={handleSearch} className="flex gap-2">
					<label className="input">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</g>
						</svg>
						<input name="search" type="search" placeholder="Search" />
					</label>
					<button className="btn btn-primary px-10">Search</button>
				</form>

				{/* sort */}
				<form>
					<select className="select appearance-none">
						<option>Chose Category</option>
						<option>Hobby</option>
						<option>Education</option>
						<option>Nutrition</option>
						<option>Fitness</option>
						<option>Health</option>
						<option>Mindfulness</option>
						<option>Lifestyle</option>
						<option>Productivity</option>
						<option>Personal Growth</option>
						<option>Work</option>
						<option>Study</option>
					</select>
				</form>
			</div>

			{/* --------------------------------------------- */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{habitData.map(habit => (
					<PublicHabitCard key={habit._id} habit={habit}></PublicHabitCard>
				))}
			</div>
		</div>
	);
};

export default BrowsePublicHabits;
