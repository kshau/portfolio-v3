"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ScreenHeader from "../ScreenHeader"
import { faBuilding, faCalendar, faUser } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { experiences } from "@/lib/content-manager"
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll"

function ExperienceCard({ ...props }) {

	const { experience } = props;

	const foregroundColor = experience.foregroundColorMode === "dark" ? "#000" : "#fff";
	const borderColor = experience.foregroundColorMode === "dark" ? "#757575" : "";
	const opacityHex = experience.foregroundColorMode === "dark" ? "e6" : "a6";

	const [ref, visible] = useFadeInOnScroll({ threshold: 0.5 });

	return (

		<div
			ref={ref as any}
			className={`w-full rounded-xl z-50 p-4 relative flex flex-row gap-x-3 shadow-lg hover:scale-105 transition-all opacity-0 ${visible && "animation-fade-in"} ${props.className}`}
			style={{
				background: `linear-gradient(135deg, ${experience.backgroundGradient.from}${opacityHex} 0%, ${experience.backgroundGradient.to}${opacityHex} 100%)`,
				boxShadow: `0 10px 15px -3px ${experience.backgroundGradient.to}a6, 0 4px 6px -4px ${experience.backgroundGradient.to}a6`,
				color: foregroundColor
			}}
		>

			<Image src={experience.logoURL} width={2048} height={2048} alt="GT" className="w-12 h-12 lg:w-14 lg:h-14" />

			<div
				className="absolute top-3 right-3 border-white/40 border rounded-full py-0.5 px-1.5 liquid-glass hidden lg:block"
				style={{ borderColor }}
			>
				<FontAwesomeIcon icon={faCalendar} className="my-auto" />
				<span className="font-thin ml-1 text-sm">
					{experience.dateRange}
				</span>
			</div>

			<div>

				<h1 className="text-lg lg:text-xl font-semibold">
					{experience.title}
				</h1>

				<div className="flex flex-wrap gap-2 mt-1.5">
					<div>
						<FontAwesomeIcon icon={faBuilding} className="fa-sm lg:fa-md" />
						<span className="ml-0.5 text-xs lg:text-md relative bottom-0.5">
							{experience.business}
						</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faLocationDot} className="fa-sm lg:fa-md" />
						<span className="font-thin ml-0.5 text-xs lg:text-md relative bottom-[0.7px]">
							{experience.location}
						</span>
					</div>
				</div>

				<p className="font-thin mt-2 text-sm lg:text-md">
					{experience.description}
				</p>

				<div className="flex flex-wrap gap-1 lg:gap-1.5 mt-3">
					{experience.skillNames.map((skillName: string, index: number) => (
						<span
							key={index}
							className={`text-xs lg:text-sm liquid-glass py-0.5 px-1.5 rounded-lg`}
							style={{ borderColor }}
						>
							{skillName}
						</span>
					))}
				</div>

			</div>
		</div>



	)

}

export default function Experience() {

	return (

		<section
			className="relative flex flex-col items-center min-h-screen bg-background mb-24"
			id="experience"
		>

			<div className="pointer-events-none absolute inset-0 overflow-y-visible opacity-0 animation-fade-in z-50">
				<div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-purple-500/10 blur-3xl" />
				<div className="absolute top-1/3 -right-40 h-[550px] w-[550px] rounded-full bg-blue-500/12 blur-3xl" />
				<div className="absolute top-2/3 -left-60 h-[520px] w-[520px] rounded-full bg-indigo-500/12 blur-3xl" />
				<div className="absolute -bottom-20 right-1/3 h-[460px] w-[460px] rounded-full bg-purple-500/8 blur-3xl" />
			</div>

			<ScreenHeader
				title="From Curiosity to Code"
				subtitle="My Experience"
			/>

			<div className="flex flex-row w-full justify-center mt-16">

				<div className="flex flex-col w-250 gap-y-6 px-4">

					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
							className={`${index % 2 == 0 && "scale-103"}`}
						/>
					))}

				</div>

			</div>

		</section>

	)
}