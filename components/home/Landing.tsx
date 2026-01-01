"use client"

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '@/lib/content-manager';

interface LandingEmojiProps {
	src: string;
	size?: number;
	className?: string;
	animationDelay?: string;
	glowClassName?: string;
};

function LandingEmoji({ src, size = 80, className = "", animationDelay = "0s", glowClassName = "bg-white/30" }: LandingEmojiProps) {
	return (
		<div
			className={`relative inline-block opacity-0 animation-fade-in ${className}`}
			style={{ animationDelay: animationDelay }}
		>

			<div className={`absolute inset-0 -z-10 rounded-full blur-3xl ${glowClassName}`}/>

			<Image
				src={src}
				width={size}
				height={size}
				alt="Emoji"
				className="relative block transform-gpu transition-transform hover:scale-120 animation-emoji opacity-0"
				style={{ animationDelay: animationDelay }}
			/>
		</div>
	);
}


export default function Landing() {

	return (

		<section
			className="flex justify-center items-center min-h-screen"
			id="home"
		>

			<div className='absolute inset-0 top-1/2 left-1/2 hidden lg:block'>
				<LandingEmoji
					src="/emojis/computer.png"
					className="right-120 bottom-60 rotate-350"
					animationDelay="0.8s"
					glowClassName="bg-white/60"
				/>

				<LandingEmoji
					src="/emojis/man-running.png"
					className="right-120 top-20 rotate-20"
					animationDelay="0.9s"
					glowClassName="bg-blue-400/60"
				/>

				<LandingEmoji
					src="/emojis/rocket.png"
					className="left-80 bottom-40"
					animationDelay="1s"
					glowClassName="bg-purple-400/60"
				/>

				<LandingEmoji
					src="/emojis/robot-face.png"
					className="left-40 top-40 rotate-10"
					animationDelay="1.1s"
					glowClassName="bg-cyan-400/60"
				/>
			</div>

			<div className='flex flex-col items-center'>

				<div className='bg-linear-to-b from-blue-200 to-blue-400 w-48 lg:w-56 aspect-square rounded-full animation-fade-in shadow-2xl shadow-blue-500/80 z-50'>
					<Image
						src="/memoji.png"
						alt='Shaurya Kumar'
						width={480}
						height={480}
						className='scale-125 relative bottom-2 hover:rotate-10 hover:scale-140 transition-all'
					/>
				</div>

				<h1
					className="scroll-m-20 overflow-visible text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text mt-12 animation-fade-in opacity-0"
					style={{ animationDelay: "0.1s" }}
				>
					<span>
						Hi, I'm{" "}
					</span>
					<span className='bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent'>
						Shaurya
					</span>
				</h1>

				<h2 className="text-2xl lg:text-3xl mt-3">
					<Typewriter
						options={{ loop: true }}
						onInit={(typewriter) => {
							typewriter
								.typeString('Full-Stack Engineer')
								.pauseFor(3000)
								.deleteAll()
								.typeString('Mobile App Developer')
								.pauseFor(3000)
								.deleteAll()
								.typeString('Aspiring AI/ML Innovator')
								.pauseFor(3000)
								.deleteAll()
								.start();
						}}
					/>
				</h2>

				<p
					className='max-w-130 text-center mt-8 text-md lg:text-lg leading-snug text-white font-thin animation-fade-in opacity-0'
					style={{ animationDelay: "0.6s" }}
				>
					I build solutions to real-world problems through code, thoughtful design, and machine learning.
				</p>

				<div className='mt-12 flex flex-row gap-4'>
					{contacts.map((contact, index) => (
						<FontAwesomeIcon
							key={index}
							icon={contact.icon}
							className='fa-xl lg:fa-2xl hover:scale-115 transition-all hover:cursor-pointer opacity-0 animation-fade-in transform hover:-translate-y-2 origin-center'
							onClick={() => window.open(contact.href)}
							style={{ animationDelay: `${0.7 + index * 0.1}s` }}
						/>
					))}

				</div>

			</div>

		</section>

	)

}