// import React from 'react';
// import { Link } from 'react-router';

// const LatestHabit = ({ latestHabit }) => {
// 	const { _id,category, image, title, description, user } = latestHabit;
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
// 						<Link to={`habitDetails/${_id}`} className="btn btn-primary">
// 							Details
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LatestHabit;


// import React from 'react';
// import { Link } from 'react-router';

// const LatestHabit = ({ latestHabit }) => {
// 	const { _id, category, image, title, description, user, progress } =
// 		latestHabit;

// 	return (
// 		<div className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
// 			<figure className="relative">
// 				<img
// 					src={image}
// 					alt={title}
// 					className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
// 				/>
// 				<div className="absolute top-2 right-2 flex gap-2">
// 					<div className="badge badge-primary">{category}</div>
// 				</div>
// 			</figure>
// 			<div className="card-body p-4 sm:p-6">
// 				<h2 className="card-title text-lg sm:text-xl font-semibold flex items-center justify-between gap-2">
// 					{title}
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
// 						to={`habitDetails/${_id}`}
// 						className="btn btn-primary btn-sm sm:btn-md hover:btn-accent transition-colors duration-200"
// 					>
// 						View Details
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LatestHabit;

// import React from 'react';
// import { Link } from 'react-router';

// const LatestHabit = ({ latestHabit }) => {
// 	const { _id, category, image, title, description, user, progress } =
// 		latestHabit;

// 	return (
// 		<div className="card w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
// 			<figure className="relative">
// 				<img
// 					src={image}
// 					alt={title}
// 					className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
// 				/>
// 				<div className="absolute top-2 right-2 flex gap-2">
// 					<div className="badge badge-primary">{category}</div>
// 				</div>
// 			</figure>

// 			<div className="card-body p-4 sm:p-6">
// 				<h2 className="card-title text-lg sm:text-xl font-semibold flex items-center justify-between gap-2">
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
// 						to={`habitDetails/${_id}`}
// 						className="btn btn-primary btn-sm sm:btn-md hover:btn-accent transition-colors duration-200"
// 					>
// 						View Details
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LatestHabit;

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
