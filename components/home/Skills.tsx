"use client"

import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { aiAndMachineLearningSkills, backendSkills, frontendSkills } from "@/lib/content-manager";
import { Skill } from "@/lib/utils";
import Image from "next/image";
import ScreenHeader from "../ScreenHeader";

interface SkillCategoryContainerProps {
	title: string;
	emojiURL: string;
	skills: Skill[];
	className?: string;
	style?: React.CSSProperties;
	animationDelayOffset: number;
}

function SkillCategoryContainer({ title, skills, emojiURL, animationDelayOffset, ...props }: SkillCategoryContainerProps) {

	const [ref, visible] = useFadeInOnScroll({ threshold: 0.5 });

	return (
		<div 
			{...props}
			ref={ref as any}
			className={`opacity-0 ${visible && "animation-fade-in"}`}
		>
			<div className="flex flex-row gap-x-2 lg:gap-x-3">
				<Image src={emojiURL} width={36} height={36} alt="Emoji" className="scale-85 lg:scale-100"/>
				<h1 className='text-2xl lg:text-3xl font-semibold mt-1 lg:mt-0'>
					{title}
				</h1>
			</div>

			<div className='flex flex-wrap gap-1.5 mt-4'>
				{skills.map((skill, index) => (
					<div
						className={`
							liquid-glass flex flex-row justify-center gap-2 p-2 lg:p-3 hover:cursor-default rounded-xl 
							hover:scale-105 transition-all hover:bg-white/30! h-10 lg:h-12
							border! border-white/15! hover:shadow-lg shadow-white/10 opacity-0 ${visible && "animation-fade-in"}
						`}
						key={index}
						style={{ animationDelay: `${animationDelayOffset + index * 0.05}s` }}
					>
						<Image
							src={skill.iconURL}
							width={36}
							height={36}
							alt={skill.name}
							className='object-contain scale-80 lg:scale-100 w-5 lg:w-fit'
						/>
						<span className='text-sm lg:text-md my-auto'>
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</div>
	)

}

export default function Skills() {

	const skillCategories = [
		{
			title: "Frontend",
			skills: frontendSkills,
			emojiURL: "/emojis/computer.png"
		},
		{
			title: "Backend",
			skills: backendSkills,
			emojiURL: "/emojis/male-technologist.png"
		},
		{
			title: "AI & Machine Learning",
			skills: aiAndMachineLearningSkills,
			emojiURL: "/emojis/brain.png"
		},
	];

	

	return (

		<section
			className="relative flex flex-col items-center min-h-screen bg-background"
			id="skills"
		>

			<div className="pointer-events-none absolute inset-0 overflow-y-visible opacity-0 animation-fade-in z-50">
				<div className="absolute -top-20 -left-80 h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-3xl" />
				<div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl" />
				<div className="absolute -bottom-30 -right-96 h-[600px] w-[600px] rounded-full bg-indigo-500/12 blur-3xl" />
			</div>


			<ScreenHeader
				title="Stuff I've Worked With"
				subtitle="My Skills"
			/>

			<div className="max-w-200 flex flex-col gap-12 mt-12 z-50">
				{skillCategories.map((category, index) => (
					<SkillCategoryContainer
						key={index}
						title={category.title}
						skills={category.skills}
						emojiURL={category.emojiURL}
						animationDelayOffset={0.2 + index * 0.15}
					/>
				))}
			</div>

		</section>

	)

}