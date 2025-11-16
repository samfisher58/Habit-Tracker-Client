// import React, { use } from 'react';
// import { Link, NavLink } from 'react-router';
// import { AuthContext } from '../../Context/AuthContext';
// import { toast } from 'react-toastify';

// const Navbar = () => {
// 	const { user, logOut } = use(AuthContext);
// 	const handleLogOut = () => {
// 		logOut()
// 			.then(() => {
// 				toast.success('logout successful');
// 			})
// 			.catch(() => {
// 				toast.error("something went wrong")
// 			});
// 	};

// 	const links = (
// 		<>
// 			<li>
// 				<NavLink to="/" end>
// 					Home
// 				</NavLink>
// 			</li>
// 			{user && (
// 				<>
// 					<li>
// 						<NavLink to="/addHabits">Add Habits</NavLink>
// 					</li>
// 					<li>
// 						<NavLink to="/myHabits">My Habits</NavLink>
// 					</li>
// 				</>

// 			)}

// 			<li>
// 				<NavLink to="/publicHabits">Browse Public Habits</NavLink>
// 			</li>
// 		</>
// 	);

// 	return (
// 		<div className="navbar bg-base-100 shadow-sm">
// 			<div className="navbar-start">
// 				<div className="dropdown">
// 					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							className="h-5 w-5"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							stroke="currentColor"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth="2"
// 								d="M4 6h16M4 12h8m-8 6h16"
// 							/>
// 						</svg>
// 					</div>
// 					<ul
// 						tabIndex="-1"
// 						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// 					>
// 						{links}
// 					</ul>
// 				</div>
// 				<Link to="/" className="btn btn-ghost text-xl font-bold">
// 					<span className='text-primary'>Habit</span> <span className="text-secondary">Tracker</span>
// 				</Link>
// 			</div>

// 			<div className="navbar-center hidden lg:flex">
// 				<ul className="menu menu-horizontal px-1">{links}</ul>
// 			</div>

// 			<div className="navbar-end flex items-center gap-2">
// 				{user ? (
// 					<>
// 						<div className="dropdown dropdown-end">
// 							<div
// 								tabIndex={0}
// 								role="button"
// 								className="btn btn-ghost btn-circle avatar"
// 							>
// 								<div className="w-10 rounded-full">
// 									<img alt="User" src={user.photoURL} />
// 								</div>
// 							</div>
// 							<ul
// 								tabIndex={0}
// 								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
// 							>
// 								<li className="font-semibold">{user.displayName}</li>
// 								<li className="text-sm text-gray-500">{user.email}</li>
// 								<li>
// 									<button
// 										onClick={handleLogOut}
// 										className="btn btn-primary btn-sm mt-2"
// 									>
// 										Log out
// 									</button>
// 								</li>
// 							</ul>
// 						</div>
// 					</>
// 				) : (
// 					<NavLink className="btn" to="/auth/login">
// 						Sign In
// 					</NavLink>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;


import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
	const { user, logOut } = use(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('Logout successful');
			})
			.catch(() => {
				toast.error('Something went wrong');
			});
	};

	const links = (
		<>
			<li>
				<NavLink
					to="/"
					end
					className={({ isActive }) =>
						`px-3 py-2 rounded-md transition-all duration-200 ${
							isActive
								? 'bg-primary text-white'
								: 'hover:bg-primary/20 hover:text-primary'
						}`
					}
				>
					Home
				</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink
							to="/addHabits"
							className={({ isActive }) =>
								`px-3 py-2 rounded-md transition-all duration-200 ${
									isActive
										? 'bg-primary text-white'
										: 'hover:bg-primary/20 hover:text-primary'
								}`
							}
						>
							Add Habits
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/myHabits"
							className={({ isActive }) =>
								`px-3 py-2 rounded-md transition-all duration-200 ${
									isActive
										? 'bg-primary text-white'
										: 'hover:bg-primary/20 hover:text-primary'
								}`
							}
						>
							My Habits
						</NavLink>
					</li>
				</>
			)}
			<li>
				<NavLink
					to="/publicHabits"
					className={({ isActive }) =>
						`px-3 py-2 rounded-md transition-all duration-200 ${
							isActive
								? 'bg-primary text-white'
								: 'hover:bg-primary/20 hover:text-primary'
						}`
					}
				>
					Browse Public Habits
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100 shadow-md px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
			{/* Left: Logo + Mobile Dropdown */}
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52 animate-slide-in"
					>
						{links}
					</ul>
				</div>
				<Link
					to="/"
					className="btn btn-ghost text-xl font-bold flex items-center gap-1 transition-transform duration-200 hover:scale-105"
				>
					<span className="text-primary">Habit</span>
					<span className="text-secondary">Tracker</span>
				</Link>
			</div>

			{/* Center: Desktop Links */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
			</div>

			{/* Right: User */}
			<div className="navbar-end flex items-center gap-3">
				{user ? (
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full border-2 border-primary overflow-hidden">
								<img alt="User" src={user.photoURL} />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu dropdown-content mt-3 p-4 shadow-lg bg-base-100 rounded-xl w-60 animate-slide-in"
						>
							<li className="font-semibold text-lg">{user.displayName}</li>
							<li className="text-sm text-gray-500">{user.email}</li>
							<li className="mt-2">
								<button
									onClick={handleLogOut}
									className="btn btn-primary w-full hover:btn-accent transition-colors duration-200"
								>
									Log Out
								</button>
							</li>
						</ul>
					</div>
				) : (
					<NavLink
						to="/auth/login"
						className="btn btn-primary hover:btn-accent transition-colors duration-200"
					>
						Sign In
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Navbar;
