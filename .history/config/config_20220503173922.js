
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Alex",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Alex Huang",
	description: "A computer science student who can't center a div and thinks about minecraft when someone says Java.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1c0jNSTyCW600K8LjkzcMEkSbuJTpfdm-SpKI-Vf1d4s/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm an aspiring full stack web developer. Currently, I'm a junior attending Stony Brook University and will be set to graduate in May 2023 with a bachelor's degree in Computer Science. I decided to switch from civil engineering to computer science during my freshman year after taking Physics 131 as I didn't enjoy the class whatsoever and didn't want to get stuck taking more physics classes for the remainder of my degree. I've always been interested in coding and changing majors was a great way to get into it and I've enjoyed it ever since.",
		"When I'm not programming, I partake in my hobbies which are: gaming, playing a variety of sports, reading books, meeting people, and building keyboards.",
	],
}

export const work = {
	title: "What I Do",
	cards: [
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Vatsyayana Cipher",
			description: "The Vatsyayana Cipher is a simple substitution cipher where the letters of an alphabet are organized into random pairs of letters.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/joy-courses/cse220-hw2-xela-h",
				},
			]
		},
		{
			title: "Fake Stack Overflow",
			description: "A clone of StackOverflow. You can post questions and answers, track the number of views and responses, and search based on descriptors.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/CSE-316-Software-Development/cse316-hw1-xela-h",
				},
			]
		},
		{
			title: "Network Structure",
			description: "Creating a network of people in which nodes represent people and edges between nodes represent relationships between people.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/joy-courses/cse220-hw4-xela-h",
				},
			]
		},
	],
}

export const writing = {
	title: "Technical Writing",
	cards: [
		{
			title: "User Manual",
			description: "Instructions For How to Play Tiến lên",
			icons: null,
		},
		{
			title: "Cover Letter",
			description: "Cover letter to a recruiter at Box",
			icons: null,
		},
		{
			title: "Press Release",
			description: "VSA's Tiến Lên event",
			icons: null,
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at xelah3@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:xelah3@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Alex Huang | Computer Science Student | Full Stack Developer",
	description: "I an aspiring full stack developer who likes to build static websites. I currently am a junior attending Stony Brook University.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@xe1a.who",
	description: "Computer Science Student | Reactjs Developer",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/xela-h",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/xela-h/",
		},
	]
}