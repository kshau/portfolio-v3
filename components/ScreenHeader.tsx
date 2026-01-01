"use client"

import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

interface ScreenHeaderProps {
	title: string;
	subtitle: string;
}

export default function ScreenHeader({ title, subtitle } : ScreenHeaderProps) {

	const [ titleRef, titleVisible ] = useFadeInOnScroll({ threshold: 0.5 });
	const [ subtitleRef, subtitleVisible ] = useFadeInOnScroll({ threshold: 0.5 });

	return (

		<div>

			<h1
				ref={titleRef as any}
				className={`text-2xl lg:text-4xl font-bold mt-28 text-center ${titleVisible && "animation-fade-in"}`}
			>
				{title}
			</h1>

			<h2
				className={`text-xl lg:text-2xl mt-1 lg:mt-2 uppercase font-thin opacity-0 text-center ${subtitleVisible && "animation-fade-in"}`}
				ref={subtitleRef as any}
				style={{ animationDelay: "0.1s" }}
			>
				{subtitle}
			</h2>

		</div>

	)

}