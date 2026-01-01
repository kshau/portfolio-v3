import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Contact {
	icon: IconDefinition;
	href: string;
}

export interface Skill {
	name: string;
	iconURL: string;
}

export interface Project {
	title: string;
	description: string;
	skillNames?: string[];
	bannerURL: string;
	demoURL?: string;
	repositoryURL?: string;
}

interface ExperienceBackgroundGradient {
	from: string;
	to: string;
}

export interface Experience {
	title: string;
	business: string;
	location: string;
	dateRange: string;
	description: string;
	logoURL: string;
	skillNames: string[];
	backgroundGradient: ExperienceBackgroundGradient;
	foregroundColorMode: "light" | "dark";
}