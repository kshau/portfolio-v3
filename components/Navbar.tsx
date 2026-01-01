"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {

	const links = [
		{ title: "Home", sectionId: "home" },
		{ title: "Skills", sectionId: "skills" },
		{ title: "Projects", sectionId: "projects" },
		{ title: "Experience", sectionId: "experience" }
	]

	const [activeSectionId, setActiveSectionId] = useState<string>("home");

	useEffect(() => {

		const sectionElems = document.querySelectorAll("section[id]");

		const updateActiveSectionId = () => {

			let currentSectionId = "home";

			sectionElems.forEach(elem => {

				const sectionTop = (elem as HTMLElement).offsetTop;

				if (window.scrollY >= sectionTop - 150) {
					currentSectionId = elem.getAttribute("id") || "home";
				}

			})

			setActiveSectionId(currentSectionId);
		}

		window.addEventListener("scroll", updateActiveSectionId);
		updateActiveSectionId();

		return () => window.removeEventListener('scroll', updateActiveSectionId);

	}, [])

	return (

		<nav className="fixed lg:top-8 left-1/2 z-100 transform -translate-x-1/2">

			<div
				className={`flex flex-wrap justify-between liquid-glass rounded-full shadow-lg p-1 lg:gap-1 animation-fade-in opacity-0 transition-colors w-[93vw] lg:w-fit`}
				style={{ animationDelay: "0.8s" }}
			>
				{links.map((link, index) => {

					const isActive = link.sectionId === activeSectionId

					return (
						<Link
							key={index}
							href={`/#${link.sectionId}`}
							className={`text-sm lg:text-md py-2 rounded-full px-4 lg:px-5 transition-all ${isActive
									? "bg-white/15 text-white"
									: "text-white/80 hover:text-white"
								}`}
						>
							{link.title}
						</Link>
					)
				})}
			</div>

		</nav>

	)

}