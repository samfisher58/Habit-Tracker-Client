import { Link, useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const PublicHabitDetails = () => {
	const habit = useLoaderData();
	const { _id, title, description, image, category, user, progress } = habit;

	const totalDays = 30;
	const completedDays = progress.completionHistory.length;
	const progressPercent = Math.min((completedDays / totalDays) * 100, 100);

	const handleComplete = async () => {
		const res = await fetch(
			`https://habit-tracker-server-api.vercel.app/habits/${_id}/complete`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
			}
		);
		const data = await res.json();
		toast.success(data.message || 'Habit completed!');
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl md:flex md:flex-col">
				<figure className="w-full overflow-hidden">
					<img
						src={image}
						alt={title}
						className="w-full h-64 object-cover md:h-72 lg:h-80"
					/>
				</figure>

				<div className="p-6 flex flex-col gap-4">
					{/* Title + Category */}
					<div className="flex justify-between items-start">
						<h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
						<span className="badge badge-secondary">{category}</span>
					</div>

					{/* Description */}
					<p className="text-gray-700 text-sm md:text-base">{description}</p>

					{/* Progress Bar */}
					<div>
						<div className="flex justify-between mb-1 text-sm md:text-base">
							<span>Progress</span>
							<span>{Math.round(progressPercent)}%</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
							<div
								className="bg-primary h-3 md:h-4 rounded-full transition-all duration-300"
								style={{ width: `${progressPercent}%` }}
							></div>
						</div>
					</div>

					{/* Streak */}
					<div className="flex flex-wrap gap-2 items-center">
						<span className="badge badge-outline">
							Current Streak: {progress.currentStreak}d
						</span>
						<span className="badge badge-outline">
							Best Streak: {progress.bestStreak}d
						</span>
					</div>

					{/* Creator Info */}
					<div>
						<h3 className="font-semibold">Created By:</h3>
						<div className="flex flex-wrap gap-2 items-center mt-1">
							<span className="badge badge-outline">{user.name}</span>
							<span className="badge badge-outline">{user.email}</span>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 mt-4">
						<button
							onClick={handleComplete}
							className="btn btn-primary flex-1 hover:btn-accent transition-colors duration-200"
						>
							Mark Complete
						</button>
						<Link
							to="/publicHabits"
							className="btn btn-secondary flex-1 hover:btn-info transition-colors duration-200"
						>
							Back to Browsing
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicHabitDetails;
