import React, {  use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import Loading from '../Loading/Loading';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const UpdateHabits = () => {
    const [habits, setHabits]  = useState(null);
    const {user} =use(AuthContext)
    const navigate = useNavigate()

    const { id } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3000/publicHabits/${id}`)
					.then(res => res.json())
					.then(data => setHabits(data));
    },[id])
    if(!habits){
        return <Loading></Loading>
    }
    const handleSubmit = e => {
		e.preventDefault();
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
        fetch(`http://localhost:3000/publicHabits/${id}`, {
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(formData),
				})
					.then(res => res.json())
					.then(() => {
						
						toast.success('successful');
                        navigate('/myHabits');
					})
					.catch(() => {
						
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
							defaultValue={habits.title}
							name="title"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Description */}
					<div>
						<label className="label font-medium">Description</label>
						<textarea
							defaultValue={habits.description}
							className="textarea textarea-bordered w-full"
							name="description"
							required
						></textarea>
					</div>

					{/* Category */}
					<div>
						<label className="label font-medium">Category</label>
						<select
							name="category"
							required
							className="select select-bordered w-full"
						>
							<option>{habits.category}</option>
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
							defaultValue={habits.reminderTime}
							name="reminderTime"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Upload Image */}
					<div>
						<label className="label font-medium">Upload image</label>
						<input
							type="text"
							name="image"
							defaultValue={habits.image}
							className="input input-bordered w-full"
							required
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
							Update Habit
						</button>
					</div>
					<div className="text-center">
						<Link className="btn btn-secondary w-full" to="/myHabits">
							Go back
						</Link>
					</div>
				</form>
			</div>
		);
};

export default UpdateHabits;