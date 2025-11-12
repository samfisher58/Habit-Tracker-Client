import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PublicHabitDetails = () => {
    const habit = useLoaderData();
		console.log(habit);
		const { title, description, image, category, user, progress } = habit;
		const totalDays = 30;
		const completedDays = progress.completionHistory.length;
		const progressPercent = Math.min((completedDays / totalDays) * 100, 100);

		const handleComplete = async () => {
			const res = await fetch(
				`http://localhost:3000/habits/${habit._id}/complete`,
				{
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json' },
				}
			);
			const data = await res.json();
			alert(data.message || 'Completed!');
		};
		return (
			<div className=" bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<figure className="w-full overflow-hidden">
					<img src={image} alt={title} />
				</figure>
				<div className="p-4">
					<div className="flex justify-between items-start">
						<h2 className="text-2xl font-bold">{title}</h2>
						<span className="badge badge-secondary">{category}</span>
					</div>
					<p className="mt-2 text-gray-700">{description}</p>

					{/* Progress Bar */}
					<div className="mt-4">
						<div className="flex justify-between mb-1 text-sm">
							<span>Progress</span>
							<span>{Math.round(progressPercent)}%</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-3">
							<div
								className="bg-primary h-3 rounded-full"
								style={{ width: `${progressPercent}%` }}
							></div>
						</div>
					</div>

					{/* Streak */}
					<div className="mt-4 flex gap-2 items-center">
						<span className="badge badge-outline">
							Current Streak: {progress.currentStreak}d
						</span>
						<span className="badge badge-outline">
							Best Streak: {progress.bestStreak}d
						</span>
					</div>

					{/* Creator Info */}
					<div className="mt-4">
						<h3 className="font-semibold">Created By:</h3>
						<div className="flex gap-2 items-center mt-1">
							<span className="badge badge-outline">{user.name}</span>
							<span className="badge badge-outline">{user.email}</span>
						</div>
					</div>

					{/* Mark Complete Button */}
					<div className="my-4 flex justify-center gap-3">
						<button
							onClick={handleComplete}
							className="btn btn-primary flex-1 items-center"
						>
							Mark Complete
						</button>
						<Link className="btn btn-secondary flex-1" to="/publicHabits">
							Back to Browsing Public habit
						</Link>
					</div>
				</div>
			</div>
		);
};

export default PublicHabitDetails;