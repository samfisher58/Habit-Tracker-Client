import React from 'react';
import { Link } from 'react-router';

const PublicHabitCard = ({ habit }) => {
    
    const { _id, category, image, title, description, user } = habit;
	return (
		<div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-sm">
			<figure>
				<img src={image} alt={title} className="w-full h-48 object-cover" />
			</figure>
			<div className="card-body">
				<h2 className="card-title flex flex-wrap gap-2">
					{title}
					<div className="badge badge-secondary">Badge</div>
					<div className="badge">{category}</div>
				</h2>
				<p className="text-sm sm:text-base">{description}</p>
				<div className="card-actions justify-start flex-wrap gap-2">
					<div className="badge badge-outline">{user.name}</div>
					<div className="badge badge-outline">{user.email}</div>
				</div>
				<div className="card-actions justify-end flex-wrap gap-2">
					<div className="card-actions justify-end">
						<Link to={`/publicHabit/${_id}`} className="btn btn-primary">
							Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicHabitCard;