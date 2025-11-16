import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
	const navigate = useNavigate();
	const { createUser, setUser, signInWithGoogle, updateUser } =
		use(AuthContext);
	const validatePassword = pw => {
		if (pw.length < 6) return 'Password must be at least 6 characters';
		if (!/[A-Z]/.test(pw)) return 'Password must contain an uppercase letter';
		if (!/[a-z]/.test(pw)) return 'Password must contain a lowercase letter';
		return null;
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				toast('Account created!');
				navigate('/');
				const newUser = {
					name: result.user.displayName,
					email: result.user.email,
					image: result.user.photoURL,
				};
				// create user n db
				fetch('https://habit-tracker-server-api.vercel.app/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(newUser),
				})
					.then(res => res.json())
					.then(() => {});
			})
			.catch(() => {});
	};

	const handleRegister = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value.trim();
		const photo = form.photo.value.trim();
		const email = form.email.value.trim();
		const password = form.password.value;

		const err = validatePassword(password);
		if (err) {
			toast.error(err);
			return;
		}

		createUser(email, password)
			.then(result => {
				const user = result.user;
				updateUser({ displayName: name, photoURL: photo })
					.then(() => {
						setUser({ ...user, displayName: name, photoURL: photo });
						const newUser = {
							name: name,
							email: email,
							image: photo,
						};
						fetch('https://habit-tracker-server-api.vercel.app/users', {
							method: 'POST',
							headers: {
								'content-type': 'application/json',
							},
							body: JSON.stringify(newUser),
						})
							.then(res => res.json())
							.then(() => {});
						toast.success('Account created!');
						navigate('/');
					})
					.catch(() => {
						setUser(user);
						toast.error('Failed to update profile info');
					});
			})
			.catch(err => {
				toast.error(err.message);
			});
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleRegister} className="card-body">
					<fieldset className="fieldset">
						<h1 className="mb-5 text-3xl font-bold text-center">
							Register your account
						</h1>

						<label className="label">Name</label>
						<input
							name="name"
							type="text"
							className="input"
							placeholder="Name"
							required
						/>

						<label className="label">Email</label>
						<input
							name="email"
							type="email"
							className="input"
							placeholder="Email"
							required
						/>

						<label className="label">Photo URL</label>
						<input
							name="photo"
							type="text"
							className="input"
							placeholder="Photo Url"
							required
						/>

						<label className="label">Password</label>
						<input
							name="password"
							type="password"
							className="input"
							placeholder="Password"
							required
						/>
						<ul className="text-xs text-base-content/70 list-disc pl-5 mt-1">
							<li>At least 6 characters</li>
							<li>One uppercase letter</li>
							<li>One lowercase letter</li>
						</ul>

						<p className="text-center mt-3">
							Already have an account?{' '}
							<NavLink className="text-secondary font-bold" to="/auth/login">
								login
							</NavLink>
						</p>

						<button type="submit" className="btn btn-primary mt-4">
							Register
						</button>
						<p className="text-center font-bold">
							OR <br />
						</p>

						{/* Google */}
						<button
							onClick={handleGoogleSignIn}
							className="btn bg-white text-black border-[#e5e5e5]"
						>
							<svg
								aria-label="Google logo"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g>
									<path d="m0 0H512V512H0" fill="#fff"></path>
									<path
										fill="#34a853"
										d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
									></path>
									<path
										fill="#4285f4"
										d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
									></path>
									<path
										fill="#fbbc02"
										d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
									></path>
									<path
										fill="#ea4335"
										d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
									></path>
								</g>
							</svg>
							Login with Google
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Register;
