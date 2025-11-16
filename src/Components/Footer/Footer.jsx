// import React from 'react';

// const Footer = () => {
// 	return (
// 		<footer className="footer p-6 bg-base-200 text-base-content flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
// 			{/* Company Section */}
// 			<div className="flex flex-col gap-2">
// 				<span className="footer-title text-primary font-semibold">Habit Tracker</span>
// 				<a className="link link-hover text-base">About Us</a>
// 				<a className="link link-hover text-base">Contact</a>
// 				<a className="link link-hover text-base">Careers</a>
// 			</div>

// 			{/* Resources Section */}
// 			<div className="flex flex-col gap-2">
// 				<span className="footer-title text-primary font-semibold">
// 					Resources
// 				</span>
// 				<a className="link link-hover text-base">Blog</a>
// 				<a className="link link-hover text-base">Help Center</a>
// 				<a className="link link-hover text-base">Privacy Policy</a>
// 			</div>

// 			{/* Social Section */}
// 			<div className="flex flex-col gap-2">
// 				<span className="footer-title text-primary font-semibold">
// 					Follow Us
// 				</span>
// 				<div className="flex space-x-4 mt-2">
// 					{/* X Logo */}
// 					<a
// 						href="https://x.com"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:bg-primary hover:text-white p-2 rounded-md transition-colors duration-200"
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 400 400"
// 							fill="currentColor"
// 							className="w-6 h-6"
// 						>
// 							<path d="M382.9 73.1c-15-15-39.4-15-54.4 0L200 201.6 71.5 73.1c-15-15-39.4-15-54.4 0-15 15-15 39.4 0 54.4L145.6 256 17.1 384.5c-15 15-15 39.4 0 54.4 15 15 39.4 15 54.4 0L200 310.4l128.5 128.5c15 15 39.4 15 54.4 0 15-15 15-39.4 0-54.4L254.4 256l128.5-128.5c15-15 15-39.4 0-54.4z" />
// 						</svg>
// 					</a>

// 					{/* GitHub Logo */}
// 					<a
// 						href="https://github.com"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:bg-secondary hover:text-white p-2 rounded-md transition-colors duration-200"
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							viewBox="0 0 24 24"
// 							fill="currentColor"
// 							className="w-6 h-6"
// 						>
// 							<path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.61-4.03-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.86.13 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 0z" />
// 						</svg>
// 					</a>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import React from 'react';

const Footer = () => {
	return (
		<footer
			className="p-8 text-white flex flex-col md:flex-row md:justify-between gap-8 md:gap-0"
			style={{
				background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
				backgroundBlendMode: 'overlay',
			}}
		>
			{/* Company Section */}
			<div className="flex flex-col gap-3">
				<span className="text-2xl font-bold tracking-wide">Habit Tracker</span>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					About Us
				</a>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					Contact
				</a>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					Careers
				</a>
			</div>

			{/* Resources Section */}
			<div className="flex flex-col gap-3">
				<span className="text-2xl font-bold tracking-wide">Resources</span>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					Blog
				</a>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					Help Center
				</a>
				<a className="hover:underline transition-all duration-200 cursor-pointer">
					Privacy Policy
				</a>
			</div>

			{/* Social Section */}
			<div className="flex flex-col gap-3">
				<span className="text-2xl font-bold tracking-wide">Follow Us</span>
				<div className="flex gap-4 mt-2">
					{/* X Logo */}
					<a
						href="https://x.com"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 400 400"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M382.9 73.1c-15-15-39.4-15-54.4 0L200 201.6 71.5 73.1c-15-15-39.4-15-54.4 0-15 15-15 39.4 0 54.4L145.6 256 17.1 384.5c-15 15-15 39.4 0 54.4 15 15 39.4 15 54.4 0L200 310.4l128.5 128.5c15 15 39.4 15 54.4 0 15-15 15-39.4 0-54.4L254.4 256l128.5-128.5c15-15 15-39.4 0-54.4z" />
						</svg>
					</a>

					{/* GitHub Logo */}
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.61-4.03-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.86.13 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 0z" />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
