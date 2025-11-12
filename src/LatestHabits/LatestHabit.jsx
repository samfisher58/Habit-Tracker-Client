import React from 'react';

const LatestHabit = ({ latestHabit }) => {
    const {category, image, title, description, user } = latestHabit;
	return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure>
				<img
					src={image}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">Badge</div>
					<div className="badge ">{category}</div>
				</h2>
				<p>
					{description}
				</p>
				<div className="card-actions justify-star">
					<div className="badge badge-outline">{user.name}</div>
					<div className="badge badge-outline">{user.email}</div>
				</div>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default LatestHabit;