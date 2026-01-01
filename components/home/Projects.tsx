"use client"

import Image from "next/image"
import ScreenHeader from "../ScreenHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Project } from "@/lib/utils";
import { projects } from "@/lib/content-manager";
import { Url } from "next/dist/shared/lib/router/router";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

interface ProjectCardProps {
	colSpan: number;
	rowSpan: number;
	project?: Project
}


function ProjectCard({ colSpan, rowSpan, project }: ProjectCardProps) {

	const [ref, visible] = useFadeInOnScroll({ threshold: 0.5 });

	const colSpanMap: Record<number, string> = {
		1: "col-span-1",
		2: "col-span-2",
		3: "col-span-3",
		4: "col-span-4",
		5: "col-span-5",
	};

	const rowSpanMap: Record<number, string> = {
		1: "row-span-1",
		2: "row-span-2",
		3: "row-span-3",
		4: "row-span-4",
	};

	if (!project) {
		return (
			<div
				ref={ref as any}
				className={`rounded-xl ${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]} overflow-hidden bg-blue-500/60 opacity-0 ${visible && "animation-fade-in"}`}
			>

			</div>
		)
	}

	return (
		<div
			ref={ref as any}
			className={`relative rounded-xl border! border-white/15! ${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]} opacity-0 ${visible && "animation-fade-in"} overflow-hidden ${project.demoURL && "hover:cursor-pointer"}`}
			onClick={() => { if (project.demoURL) window.open(project.demoURL) }}
		>
			<Image
				src={project.bannerURL}
				width={1024}
				height={1024}
				className="w-full h-full rounded-xl object-cover scale-110 hover:scale-100 transition-all blur-[2px] hover:blur-none"
				alt="Ballista"
			/>

			<div className="absolute bottom-0 p-3 z-100 bg-background/80 w-full">
				<h1 className="font-semibold text-lg">
					{project.title}
				</h1>
				<p className="font-thin leading-4 text-sm text-white/80">
					{project.description}
				</p>
				{project.skillNames && (
					<div className="flex flex-wrap gap-1 mt-2">
						{project.skillNames.map((skillName, index) => (
							<span
								key={index}
								className="text-[11px] liquid-glass py-0.5 px-1.5 rounded-lg"
							>
								{skillName}
							</span>
						))}
					</div>
				)}

				{(project.demoURL || project.repositoryURL) && (
					<div className="flex flex-row text-sm gap-x-3 mt-2">
						{project.demoURL && (
							<div>
								<FontAwesomeIcon icon={faExternalLink} className="mr-1" />
								<Link
									href={project.demoURL as Url}
									className="hover:underline"
									target="#"
								>
									Demo
								</Link>
							</div>
						)}

						{project.repositoryURL && (
							<div>
								<FontAwesomeIcon icon={faGithub} className="mr-1" />
								<Link
									href={project.repositoryURL as Url}
									className="hover:underline"
									target="#"
								>
									Repository
								</Link>
							</div>
						)}


					</div>
				)}

			</div>
		</div>
	)

}

export default function Projects() {

	return (

		<section
			className="relative flex flex-col items-center min-h-screen bg-background"
			id="projects"
		>

			<div className="pointer-events-none absolute inset-0 overflow-y-visible opacity-0 animation-fade-in z-50">
				<div className="absolute -top-60 left-0 h-[650px] w-[650px] rounded-full bg-purple-500/10 blur-3xl" />
				<div className="absolute top-1/3 -right-100 h-[600px] w-[600px] rounded-full bg-indigo-500/12 blur-3xl" />
				<div className="absolute bottom-1/4 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-500/12 blur-3xl" />
			</div>

			<ScreenHeader
				title="Look What I've Built"
				subtitle="My Projects"
			/>

			<div className="flex flex-col lg:grid lg:grid-cols-5 gap-2 auto-rows-[160px] grid-flow-dense z-50 mx-auto max-w-300 mt-16 px-6">

				<ProjectCard colSpan={2} rowSpan={2} project={projects.vctryprep} />
				<ProjectCard colSpan={1} rowSpan={3} project={projects.ballista} />
				<ProjectCard colSpan={2} rowSpan={2} project={projects.antimalarialRamanSpectrometer} />
				<ProjectCard colSpan={1} rowSpan={3} />
				<ProjectCard colSpan={1} rowSpan={2} project={projects.satUnlimited} />
				<ProjectCard colSpan={1} rowSpan={1} project={projects.ascent} />
				<ProjectCard colSpan={1} rowSpan={3} />
				<ProjectCard colSpan={2} rowSpan={2} project={projects.packPlanner} />
				<ProjectCard colSpan={1} rowSpan={2} project={projects.vidosaur} />
				<ProjectCard colSpan={1} rowSpan={2} />
				<ProjectCard colSpan={1} rowSpan={2} />
				<ProjectCard colSpan={2} rowSpan={2} project={projects.codeAAI} />

			</div>

		</section>


	)

}