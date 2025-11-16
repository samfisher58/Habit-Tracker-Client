// import React from 'react';
// import { Link } from 'react-router';

// const PublicHabitCard = ({ habit }) => {
    
//     const { _id, category, image, title, description, user } = habit;
// 	return (
// 		<div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-sm">
// 			<figure>
// 				<img src={image} alt={title} className="w-full h-48 object-cover" />
// 			</figure>
// 			<div className="card-body">
// 				<h2 className="card-title flex flex-wrap gap-2">
// 					{title}
// 					<div className="badge badge-secondary">Badge</div>
// 					<div className="badge">{category}</div>
// 				</h2>
// 				<p className="text-sm sm:text-base">{description}</p>
// 				<div className="card-actions justify-start flex-wrap gap-2">
// 					<div className="badge badge-outline">{user.name}</div>
// 					<div className="badge badge-outline">{user.email}</div>
// 				</div>
// 				<div className="card-actions justify-end flex-wrap gap-2">
// 					<div className="card-actions justify-end">
// 						<Link to={`/publicHabit/${_id}`} className="btn btn-primary">
// 							Details
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PublicHabitCard;

// import React from 'react';
// import { Link } from 'react-router';

// const PublicHabitCard = ({ habit }) => {
// 	const { _id, category, image, title, description, user, progress } = habit;

// 	return (
// 		<div className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
// 			<figure className="relative">
// 				<img
// 					src={image}
// 					alt={title}
// 					className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
// 				/>
// 				<div className="absolute top-2 right-2">
// 					<div className="badge badge-primary">{category}</div>
// 				</div>
// 			</figure>

// 			<div className="card-body p-4 sm:p-6">
// 				<h2 className="card-title text-lg sm:text-xl font-semibold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
// 					<span>{title}</span>
// 					<span className="badge badge-secondary">
// 						Streak: {progress?.currentStreak || 0}
// 					</span>
// 				</h2>

// 				<p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-3">
// 					{description}
// 				</p>

// 				<div className="mt-4 flex flex-wrap gap-2">
// 					<div className="badge badge-outline text-sm">{user.name}</div>
// 					<div className="badge badge-outline text-sm">{user.email}</div>
// 				</div>

// 				<div className="mt-4 flex justify-end">
// 					<Link
// 						to={`/publicHabit/${_id}`}
// 						className="btn btn-primary btn-sm sm:btn-md hover:btn-accent transition-colors duration-200"
// 					>
// 						View Details
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PublicHabitCard;
import React from 'react';
import { Link } from 'react-router';

const PublicHabitCard = ({ habit }) => {
	const { _id, category, image, title, description, user, progress } = habit;

	// Generate avatar URL based on user's name
	const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
		user.name
	)}&background=0D8ABC&color=fff&rounded=true`;

	return (
		<div className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
			<figure className="relative">
				<img
					src={image}
					alt={title}
					className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
				/>
				<div className="absolute top-2 right-2">
					<div className="badge badge-primary">{category}</div>
				</div>
			</figure>

			<div className="card-body p-4 sm:p-6">
				<h2 className="card-title text-lg sm:text-xl font-semibold flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
					<span>{title}</span>
					<span className="badge badge-secondary">
						Streak: {progress?.currentStreak || 0}
					</span>
				</h2>

				<p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-3">
					{description}
				</p>

				<div className="mt-4 flex items-center gap-2">
					<img
						src={avatarUrl}
						alt={user.name}
						className="w-8 h-8 rounded-full border-2 border-gray-200"
					/>
					<div className="flex flex-col">
						<span className="text-sm font-medium">{user.name}</span>
						<span className="text-xs text-gray-500">{user.email}</span>
					</div>
				</div>

				<div className="mt-4 flex justify-end">
					<Link
						to={`/publicHabit/${_id}`}
						className="btn btn-primary btn-sm sm:btn-md hover:btn-accent transition-colors duration-200"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PublicHabitCard;
