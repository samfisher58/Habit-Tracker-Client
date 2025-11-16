import React from 'react';
import { Link } from 'react-router';

const LatestHabit = ({ latestHabit }) => {
	const { _id, category, image, title, description, user, progress } =
		latestHabit;

	return (
		<div className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
			<figure className="relative">
				<img
					src={image}
					alt={title}
					className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
				/>
				<div className="absolute top-2 right-2 flex gap-2">
					<div className="badge badge-primary">{category}</div>
				</div>
			</figure>

			<div className="card-body p-4 sm:p-6">
				{/* Title + Streak */}
				<h2 className="card-title text-lg sm:text-xl font-semibold flex items-center justify-between gap-2">
					<span>{title}</span>
					<span className="badge badge-secondary">
						Streak: {progress?.currentStreak || 0}
					</span>
				</h2>

				{/* Description */}
				<p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-3">
					{description}
				</p>

				{/* User Info */}
				<div className="mt-4 flex flex-wrap gap-2">
					<div className="badge badge-outline text-sm">{user.name}</div>
					<div className="badge badge-outline text-sm">{user.email}</div>
				</div>

				{/* Details Button */}
				<div className="mt-4 flex justify-end">
					<Link
						to={`habitDetails/${_id}`}
						className="btn btn-primary btn-sm sm:btn-md hover:btn-accent transition-colors duration-200"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LatestHabit;
