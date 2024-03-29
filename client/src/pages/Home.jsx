import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import LoginModal from "../components/Login";
import HomeCarousel from "../components/HomeCarousel";

export default function LandingPage() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [isCarouselOpen, setCarouselOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};
	const openCarousel = () => {
		setCarouselOpen(true);
	};

	const closeCarousel = () => {
		setCarouselOpen(false);
	};
	const reviews = [
		{
			name: "Charlotte K.",
			review:
				"This app is an absolute gem for dog owners. It has completely transformed our dog's social life. We've connected with other local dog parents and organized playdates that our fur baby adores.",
		},
		{
			name: "Michelle F.",
			review:
				"I can't speak highly enough about this app. It's a dream come true for anyone who loves dogs. The way it connects local dog owners and their four-legged companions is remarkable.",
		},
		{
			name: "Jasmine N.",
			review:
				"Our dog's social circle has expanded, and the improvement in his happiness and energy levels is astounding. We've met incredible people through the app, all united by their love for dogs. ",
		},
	];

	function ReviewCards({ name, review }) {
		return (
			<div className="p-4 w-full md:w-4/12">
				<div className="rounded-lg shadow-lg bg-primary">
					<div className="p-4">
						<div className="flex justify-between items-center">
							<h3 className="text-xl font-semibold">{name}</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
								/>
							</svg>
						</div>
						<p className="mt-2">{review}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="mb-10">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://img.freepik.com/premium-photo/group-dogs-are-sitting-together-park_902338-22817.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white flex flex-col items-center justify-center">
					<div className="max-w-md flex flex-col items-center">
						<h1 className="mb-5 text-5xl font-bold">
							<TypeAnimation
								className="homeNameTitle"
								sequence={[
									// Same substring at the start will only be typed out once, initially
									"Go for a Walk?",
									2000, // wait 1s before replacing "Mice" with "Hamsters"
									"Play Fetch?",
									2000,
									"Go Swimming?",
									2000,
									"LET'S MEET!",
									4000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
							></TypeAnimation>
						</h1>
						<p className="mb-5">Find a best friend for man's best friend!</p>
						{/* LOGIN MODAL */}
						<label
							htmlFor="my_modal_login"
							className="btn btn-primary text-white mb-3 w-48"
						>
							Login / Sign Up
						</label>
						<input
							type="checkbox"
							id="my_modal_login"
							className="modal-toggle"
						/>
						<div className="modal flex flex-col justify-center items-center">
							<LoginModal isOpen={isModalOpen} onClose={closeModal} />
						</div>
						<label htmlFor="my_modal_prev" className="btn w-48">
							Preview Site
						</label>
						<input
							type="checkbox"
							id="my_modal_prev"
							className="modal-toggle"
						/>
						<div className="modal">
							<div className="modal-box flex flex-col justify-center items-center">
								<HomeCarousel />
								<div className="modal-action">
									<label htmlFor="my_modal_prev" className="btn">
										Close!
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid md:flex mb-2">
				{reviews.map((review, index) => (
					<ReviewCards key={index} name={review.name} review={review.review} />
				))}
			</div>
		</div>
	);
}

