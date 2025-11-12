// import React from 'react';
// import { NavLink } from 'react-router';

// const Login = () => {
//     return (
// 			<div>
// 				this is from login
// 				<NavLink to="/auth/register">Register</NavLink>
// 			</div>
// 		);
// };

// export default Login;


import React, { useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
	const [error, setError] = useState('');
	const [show, setShow] = useState(false);
	const { signInUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signInUser(email, password)
			.then(() => {
				navigate(location.state ? location.state : '/');
                alert('Login Successful')
			})
			.catch(err => setError(err.code));
	
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleLogin} className="card-body">
					<fieldset className="fieldset">
						<h1 className="mb-5 text-3xl font-bold text-center">
							Login your account
						</h1>

						<label className="label">Email</label>
						<input
							name="email"
							type="email"
							className="input"
							placeholder="Email"
							required
						/>

						<label className="label">Password</label>
						<div className="relative">
							<input
								name="password"
								type={show ? 'text' : 'password'}
								className="input w-full pr-10"
								placeholder="Password"
								required
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-3 flex items-center text-accent hover:text-primary"
								onClick={() => setShow(v => !v)}
							>
								{show ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>

						<div className="text-center mt-3">
							<a className="link link-hover">Forgot password?</a>
						</div>

						<p className="text-center">
							Don't Have An Account ?{' '}
							<NavLink className="text-secondary font-bold" to="/auth/register">
								Register
							</NavLink>
						</p>

						{error && (
							<p className="text-primary text-xs text-center">{error}</p>
						)}

						<button type="submit" className="btn btn-primary mt-4">
							Login
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;