import React from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { use } from 'react';

const AddHabits = () => {
	const { user } = use(AuthContext);
	console.log(user);
	const handleSubmit = e => {
		e.preventDefault();

		// id
		// 6914bd9690a43876ec7e544e
		// title
		// "Read a Book"
		// description
		// "Read at least 20 pages of any book daily."
		// category
		// "Education"
		// reminderTime
		// "20:00"
		// image
		// "https://i.ibb.co.com/3m4QQfXd/christin-hume-k2-Kcwkandwg-unsplash.jpg"

		// user
		// Object
		// name
		// "Saymon Islam"
		// email
		// "saymon3@example.com"

		// progress
		// Object

		// completionHistory
		// Array (1)
		// currentStreak
		// 1
		// bestStreak
		// 3
		// createdAt
		// "2025-11-01T20:00:00.000Z"

		const formData = {
			title: e.target.title.value,
			description: e.target.description.value,
			category: e.target.category.value,
			reminderTime: e.target.reminderTime.value,
			image: e.target.image.value,
			user: {
				name: e.target.name.value,
				email: e.target.email.value,
			},

			createdAt: new Date(),
			progress: {
				completionHistory: [],
				currentStreak: 0,
				bestStreak: 0,
			},
		};
		console.log(formData);
		fetch('http://localhost:3000/publicHabits', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				alert('habit added successfully');
			})
			.catch(err => {
				console.log(err);
				alert(err);
			});
	};

	return (
		<div className="max-w-xl mx-auto bg-base-100 p-6 rounded-xl shadow-md mt-6">
			<h2 className="text-2xl font-bold mb-4 text-center">Add a New Habit</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Habit Title */}
				<div>
					<label className="label font-medium">Habit Title</label>
					<input
						type="text"
						placeholder="Enter habit title"
						name="title"
						className="input input-bordered w-full"
					/>
				</div>

				{/* Description */}
				<div>
					<label className="label font-medium">Description</label>
					<textarea
						placeholder="Write a short description"
						className="textarea textarea-bordered w-full"
						name="description"
					></textarea>
				</div>

				{/* Category */}
				<div>
					<label className="label font-medium">Category</label>
					<select name="category" className="select select-bordered w-full">
						<option disabled selected>
							Select a category
						</option>
						<option>Morning</option>
						<option>Work</option>
						<option>Fitness</option>
						<option>Evening</option>
						<option>Study</option>
					</select>
				</div>

				{/* Reminder Time */}
				<div>
					<label className="label font-medium">Reminder Time</label>
					<input
						type="time"
						name="reminderTime"
						className="input input-bordered w-full"
					/>
				</div>

				{/* Upload Image */}
				<div>
					<label className="label font-medium">Upload image</label>
					<input
						type="text"
						name="image"
						placeholder="Enter Image URL"
						className="input input-bordered w-full"
					/>
				</div>

				{/* User Info */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="label font-medium">User Name</label>
						<input
							type="text"
							name="name"
							readOnly
							defaultValue={user.displayName}
							className="input input-bordered w-full bg-gray-100"
						/>
					</div>
					<div>
						<label className="label font-medium">User Email</label>
						<input
							type="email"
							readOnly
							name="email"
							defaultValue={user.email}
							className="input input-bordered w-full bg-gray-100"
						/>
					</div>
				</div>

				{/* Submit Button */}
				<div className="text-center">
					<button type="submit" className="btn btn-primary w-full">
						Add Habit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddHabits;
