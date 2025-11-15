import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyHabits = () => {
	const { user } = use(AuthContext);
	const [habits, setHabits] = useState([]);
    
    

	
	useEffect(() => {
		if (!user?.email) return;

		fetch(`http://localhost:3000/my-habit?email=${user.email}`)
			.then(res => res.json())
			.then(data => {
				setHabits(data);
                
			})
			.catch(err => console.log(err));
            
	}, [user?.email]);
    

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'This habit will be permanently deleted!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Delete',
			cancelButtonText: 'Cancel',
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/my-habit/${id}`, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(() => {
                        setHabits( habits.filter(habit=>habit._id !== id));
						Swal.fire('Deleted!', 'Habit removed successfully.', 'success');
                        
					})
					.catch(err => console.log(err));

                    
			}
		});
	};

	
	const handleComplete = async (id) => {
		const res = await fetch(
			`http://localhost:3000/habits/${id}/complete`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
			}
		);
		const data = await res.json();
        setHabits(habits.map(habit=>habit._id==id?{
            ...habit,
          progress: {
            ...habit.progress,
            completionHistory: data.completionHistory,
            currentStreak: data.currentStreak,
            bestStreak: data.bestStreak,
        }}:habit))
        
		alert(data.message || 'Completed!');
	};
    console.log(habits);

	return (
		<div className="max-w-5xl mx-auto mt-10">
			<h2 className="text-3xl font-bold mb-6 text-center">My Habits</h2>

			<div className="overflow-x-auto bg-base-100 p-5 rounded-xl shadow">
				<table className="table w-full">
					<thead>
						<tr className="text-lg font-semibold">
							<th>Title</th>
							<th>Category</th>
							<th>Current Streak</th>
							<th>Created Date</th>
							<th className="text-right">Actions</th>
						</tr>
					</thead>

					<tbody>
						{habits.map(habit => (
							<tr key={habit._id}>
								<td>{habit.title}</td>
								<td>{habit.category}</td>
								<td>{habit.progress?.currentStreak || 0}</td>
								<td>{new Date(habit.createdAt).toLocaleDateString()}</td>

								<td>
									<div className="flex justify-end gap-3">
										{/* Update Button */}
										{/* <button className="btn btn-sm btn-info">Update</button> */}
										<Link  to={`/myHabits/update-habits/${habit._id}`} className='btn btn-sm btn-primary'>
											Update Habits
										</Link>

										{/* Delete Button */}
										<button
											onClick={() => handleDelete(habit._id)}
											className="btn btn-sm btn-error"
										>
											Delete
										</button>

										{/* Mark Complete */}
										<button
											onClick={() => handleComplete(habit._id)}
											className="btn btn-sm btn-success"
										>
											Complete
										</button>
									</div>
								</td>
							</tr>
						))}

						{habits.length === 0 && (
							<tr>
								<td colSpan="5" className="text-center py-6 text-gray-500">
									No habits found. Add some habits first.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyHabits;
