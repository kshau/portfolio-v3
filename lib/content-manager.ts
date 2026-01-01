import { Contact, Experience, Project, Skill } from "./utils";
import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const contacts: Contact[] = [
	{ icon: faInstagram, href: "https://www.instagram.com/_kshau/" },
	{ icon: faGithub, href: "https://github.com/kshau/" },
	{ icon: faDiscord, href: "https://www.discord.com/users/768181277814685706/" },
	{ icon: faLinkedin, href: "https://www.linkedin.com/in/shaurya-kumar-094262312/" },
	{ icon: faEnvelope, href: "mailto:kshaurya731@gmail.com" },
]

export const frontendSkills: Skill[] = [
	{ name: "HTML", iconURL: "/skill-icons/html.png" },
	{ name: "CSS", iconURL: "/skill-icons/css.png" },
	{ name: "JavaScript", iconURL: "/skill-icons/javascript.png" },
	{ name: "TypeScript", iconURL: "/skill-icons/typescript.png" },
	{ name: "React", iconURL: "/skill-icons/react.png" },
	{ name: "Next.js", iconURL: "/skill-icons/nextjs.png" },
	{ name: "Tailwind CSS", iconURL: "/skill-icons/tailwindcss.png" },
	{ name: "Shadcn", iconURL: "/skill-icons/shadcn.png" },
	{ name: "React Native", iconURL: "/skill-icons/react.png" },
	{ name: "Figma", iconURL: "/skill-icons/figma.png" },
];

export const backendSkills: Skill[] = [
	{ name: "Node.js", iconURL: "/skill-icons/nodejs.png" },
	{ name: "Express.js", iconURL: "/skill-icons/expressjs.png" },
	{ name: "Flask", iconURL: "/skill-icons/flask.png" },
	{ name: "MongoDB", iconURL: "/skill-icons/mongodb.png" },
	{ name: "SQL", iconURL: "/skill-icons/sql.png" },
	{ name: "Google APIs & OAuth", iconURL: "/skill-icons/google.png" },
	{ name: "Amazon EC2", iconURL: "/skill-icons/amazon-ec2.png" },
	{ name: "Ubuntu Linux", iconURL: "/skill-icons/ubuntu-linux.png" },
];

export const aiAndMachineLearningSkills: Skill[] = [
	{ name: "Python", iconURL: "/skill-icons/python.png" },
	{ name: "pandas", iconURL: "/skill-icons/pandas.png" },
	{ name: "NumPy", iconURL: "/skill-icons/numpy.png" },
	{ name: "Matplotlib", iconURL: "/skill-icons/matplotlib.png" },
	{ name: "scikit-learn", iconURL: "/skill-icons/scikit-learn.png" },
	{ name: "TensorFlow", iconURL: "/skill-icons/tensorflow.png" },
	{ name: "Keras", iconURL: "/skill-icons/keras.png" },
	{ name: "LangChain", iconURL: "/skill-icons/langchain.png" },
	{ name: "LangGraph", iconURL: "/skill-icons/langgraph.png" },
	{ name: "OpenAI API", iconURL: "/skill-icons/openai.png" },
	{ name: "Gemini API", iconURL: "/skill-icons/gemini.png" },
	{ name: "NLTK", iconURL: "/skill-icons/nltk.png" },
];

export const projects: Record<string, Project> = {
	vctryprep: {
		title: "vctryprep",
		description: "A website with informational modules, practice tests, presentation grading, and more for FBLA, DECA, and HOSA!",
		skillNames: ["Next.js", "Shadcn", "Firebase"],
		bannerURL: "/project-banners/vctryprep.png",
		demoURL: "https://vctryprep.com",
	},
	ballista: {
		title: "Ballista",
		description: "An app designed to accelerate the school assessment grading process with computer vision and AI.",
		skillNames: ["Google Cloud Vision API", "FastAPI", "Firebase", "React Native", "OpenCV"],
		bannerURL: "/project-banners/ballista.png",
		demoURL: "https://drive.google.com/file/d/1tEp5AhtaRzOZ5gcVVrrUdTvKidt5rs_j/view",
		repositoryURL: "https://github.com/orgs/Ballista67/repositories"
	},
	antimalarialRamanSpectrometer: {
		title: "Antimalarial Raman Spectrometer",
		description: "A spectrometer that can detect counterfeit antimalarial medications with machine learning.",
		skillNames: ["Raspberry Pi", "STM32", "TensorFlow", "Keras", "scikit-learn", "pandas", "NumPy"],
		bannerURL: "/project-banners/antimalarial-raman-spectrometer.png"
	},
	satUnlimited: {
		title: "SAT Unlimited",
		description: "A simple platform created to assist students with studying for the SAT.",
		skillNames: ["Next.js", "Shadcn"],
		bannerURL: "/project-banners/sat-unlimited.png",
		demoURL: "https://www.satunlimited.com/",
		repositoryURL: "https://github.com/kshau/sat-unlimited"
	},
	vidosaur: {
		title: "Vidosaur",
		description: "A platform that lets you create your own customizable video stories. Created for FBLA.",
		skillNames: ["Next.js", "Gemini API", "Cloudinary"],
		bannerURL: "/project-banners/vidosaur.png",
		demoURL: "https://vidosaur.shaurya.pro/",
		repositoryURL: "https://github.com/kshau/vidosaur"
	},
	packPlanner: {
		title: "Pack Planner",
		description: "A website designed to help backpackers plan which items to bring on their adventures while maintaining a lightweight backpack.",
		skillNames: ["Next.js", "Shadcn", "MongoDB"],
		bannerURL: "/project-banners/pack-planner.png",
		demoURL: "https://packplanner.shaurya.pro/",
		repositoryURL: "https://github.com/kshau/pack-planner"
	},
	ascent: {
		title: "Ascent",
		description: "AI/ML YouTube shorts channel.",
		bannerURL: "/project-banners/ascent.png",
		demoURL: "https://www.youtube.com/@Ascent2/shorts",
	},
	codeAAI: {
		title: "Code AAI",
		description: "A web app which lets users solve basic programming challenges similar to LeetCode. Created for my high school's coding club.",
		skillNames: ["Next.js", "Shadcn", "Piston API", "Firebase", "Gemini API"],
		bannerURL: "/project-banners/code-aai.png",
		repositoryURL: "https://github.com/kshau/code-aai",
	}
}

export const experiences: Experience[] = [
	{
		title: "Co-Founder, Chief Technology Officer, & Full-Stack Developer",
		business: "vctryprep",
		location: "Remote",
		dateRange: "Nov 2025 - Present",
		description: "Building an AI-powered platform that provides informational learning modules, practice tests, automated presentation grading, and additional tools to support student preparation for FBLA, DECA, and HOSA competitions.",
		logoURL: "/experience-logos/vctryprep.png",
		skillNames: ["Next.js", "Shadcn", "Tailwind CSS", "Firebase"],
		backgroundGradient: {
			from: "#ebebeb", 
			to: "#97ceed"
		},
		foregroundColorMode: "dark"
	},
	{
		title: "Research Assistant",
		business: "Georgia Institute of Technology",
		location: "Remote",
		dateRange: "Jun 2025 - Present",
		description: "Developing a full-stack web application for Georgia Tech's Hybrid Intelligence Lab to support a study on how large language models (LLMs) influence human moral judgment. Working with psychology professor Dr. Mengyao Li and Ph.D. candidate Trevor Patten.",
		logoURL: "/experience-logos/georgia-institute-of-technology.png",
		skillNames: ["Next.js", "OpenAI API", "MongoDB", "Shadcn", "Tailwind CSS"],
		backgroundGradient: {
			from: "#b0a066", 
			to: "#857438"
		}, 
		foregroundColorMode: "light"
	}, 
	{
		title: "Co-Founder & Content Creator",
		business: "Ascent",
		location: "Cumming, GA",
		dateRange: "May 2025 - Present",
		description: "Creating beginner-friendly videos on machine learning, AI, and computer science to make complex topics more accessible. Currently developing an interactive website featuring videos, quizzes, and hands-on content to help learners apply concepts and build real-world projects.",
		logoURL: "/experience-logos/ascent.png",
		skillNames: ["Python", "TensorFlow", "scikit-learn", "pandas"],
		backgroundGradient: {
			from: "#112636", 
			to: "#102738"
		}, 
		foregroundColorMode: "light"
	}, 
	{
		title: "Co-President",
		business: "AAI Coding Club",
		location: "Cumming, GA",
		dateRange: "Jun 2025 - Present",
		description: "Created the club's website featuring coding challenges and a leaderboard. Designed and delivered hands-on workshops to help members strengthen their skills in programming and problem-solving. Currently Leading an officer team of five to organize meetings, events, and club initiatives.",
		logoURL: "/experience-logos/aai-coding-club.png",
		skillNames: ["Python", "JavaScript", "scikit-learn", "Google Gemini API"],
		backgroundGradient: {
			from: "#1e2441", 
			to: "#1e2642"
		}, 
		foregroundColorMode: "light"
	}, 
	{
		title: "Freelance Web Developer",
		business: "Shaurya's Web Development",
		location: "Remote",
		dateRange: "Jul 2024 - Dec 2024",
		description: "Designed and developed custom websites for local small businesses and individual clients, leveraging Figma for UI/UX design and Next.js for implementation. Collaborated directly with clients to gather requirements, translate needs into functional features, and deliver responsive, user-friendly solutions.",
		logoURL: "/experience-logos/shauryas-web-development.png",
		skillNames: ["Next.js", "ShadCN", "Tailwind CSS"],
		backgroundGradient: {
			from: "#17161c", 
			to: "#07060b"
		}, 
		foregroundColorMode: "light"
	}, 
	{
		title: "Junior Software Associate Intern",
		business: "Acrivision Technologies",
		location: "Remote",
		dateRange: "Jun 2023 - Dec 2023",
		description: "Developed a form-based web application for designing and configuring cell towers using JavaScript and the React framework. Implemented dynamic form components, state management, and validation logic to support accurate entry of engineering specifications and streamline the design workflow.",
		logoURL: "/experience-logos/acrivision-technologies.png",
		skillNames: ["React"],
		backgroundGradient: {
			from: "#ff6538", 
			to: "#fe5321"
		}, 
		foregroundColorMode: "light"
	}
]