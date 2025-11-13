import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
	const { user, logOut } = use(AuthContext);
	console.log(user);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				alert('logout successful');
			})
			.catch(error => {
				console.log(error);
			});
	};

	const links = (
		<>
			<li>
				<NavLink to="/" end>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink to="/publicHabits">Browse Public Habits</NavLink>
			</li>

			{user && (
				<>
					<li>
						<NavLink to="/addHabits">Add Habits</NavLink>
					</li>
					<li>
						<NavLink to="/myHabits">My Habits</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">
					Habit <span>Tracker</span>
				</a>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>

			<div className="navbar-end flex items-center gap-2">
				{user ? (
					<>
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img alt="User" src={user.photoURL} />
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li className="font-semibold">{user.displayName}</li>
								<li className="text-sm text-gray-500">{user.email}</li>
								<li>
									<button onClick={handleLogOut} className="btn btn-sm mt-2">
										Log out
									</button>
								</li>
							</ul>
						</div>
					</>
				) : (
					<NavLink className="btn" to="/auth/login">
						Sign In
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Navbar;
