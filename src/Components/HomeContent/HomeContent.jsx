import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomeContent = () => {
	// Hero Slider settings
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	
	const heroSlides = [
		{
			title: 'Build Better Habits',
			subtitle: 'Track your daily habits and boost your productivity',
			src: 'https://i.ibb.co.com/mC3vQ3rh/brooke-lark-Hl-Ncigv-Ui4-Q-unsplash.jpg',
		},
		{
			title: 'Stay Consistent',
			subtitle: 'Maintain streaks and achieve your goals',
			src: 'https://i.ibb.co.com/pvh5Wwvs/set-sj-9-T6-Donf-J4-Tk-unsplash.jpg',
		},
		{
			title: 'Improve Your Life',
			subtitle: 'Small habits lead to big results',
			src: 'https://i.ibb.co.com/3m4QQfXd/christin-hume-k2-Kcwkandwg-unsplash.jpg',
		},
	];
	
	const benefits = [
		{
			title: 'Better Focus',
			icon: '🧠',
			desc: 'Improve your concentration and productivity',
		},
		{
			title: 'Reduced Stress',
			icon: '😌',
			desc: 'Habits help reduce stress and anxiety',
		},
		{
			title: 'Healthier Life',
			icon: '💪',
			desc: 'Stay active and maintain a healthy lifestyle',
		},
		{
			title: 'Goal Achievement',
			icon: '🎯',
			desc: 'Consistent habits lead to success',
		},
	];

	const testimonials = [
		{
			name: 'John Doe',
			text: 'This app helped me stick to my daily habits for months!',
		},
		{
			name: 'Jane Smith',
			text: 'I finally built the productivity routine I wanted!',
		},
		{
			name: 'Ali Khan',
			text: 'Tracking habits visually made me more consistent!',
		},
	];

	const tips = [
		'Start small, focus on one habit at a time',
		'Track progress daily for motivation',
		'Celebrate small wins',
		'Be consistent, even if imperfect',
	];

	return (
		<div className="space-y-16">
			{/* Hero Banner / Slider */}
			<section className="relative">
				<Slider {...sliderSettings}>
					{heroSlides.map((slide, idx) => (
						<div key={idx} className="relative w-full h-96">
							<img
								src={slide.src}
								alt={slide.title}
								className="w-full h-96 object-cover"
							/>
							<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
								<motion.h1
									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									className="text-4xl font-bold mb-2"
								>
									{slide.title}
								</motion.h1>
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5, duration: 0.8 }}
									className="text-lg"
								>
									{slide.subtitle}
								</motion.p>
							</div>
						</div>
					))}
				</Slider>
			</section>

			{/* Why Build Habits */}
			<section className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">
					Why Build Habits?
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{benefits.map((benefit, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.05 }}
							className="bg-white shadow-md p-6 rounded-xl text-center"
						>
							<div className="text-4xl mb-3">{benefit.icon}</div>
							<h3 className="text-xl font-semibold mb-2">
								<Typewriter
									words={[benefit.title]}
									loop={true}
									cursor
									cursorStyle="_"
									typeSpeed={90}
									deleteSpeed={90}
									delaySpeed={3000}
								/>
							</h3>
							<p className="text-gray-600">{benefit.desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Extra Section 1: Testimonials */}
			<section className="bg-gray-100 py-16">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-8">What Users Say</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((t, idx) => (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								className="bg-white p-6 rounded-xl shadow-md"
							>
								<p className="italic mb-4">"{t.text}"</p>
								<span className="font-semibold">- {t.name}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Extra Section 2: Tips */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<h2 className="text-3xl font-bold text-center mb-8">
					Tips to Build Consistent Habits
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{tips.map((tip, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.03 }}
							className="bg-primary/10 p-6 rounded-xl shadow-md text-center"
						>
							<p className="text-lg font-medium">{tip}</p>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomeContent;
