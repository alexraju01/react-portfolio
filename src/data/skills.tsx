import type { IconName } from "../components/SkillCard";

type Skill = {
	iconName: IconName;
	title: string;
	skills: string;
};

export const skills: Skill[] = [
	{
		iconName: "Code2",
		title: "Front-End",
		skills: "HTML, CSS, JavaScript, TypeScript, Tailwind",
	},
	{
		iconName: "Laptop",
		title: "Back-End",
		skills: "Node.js, Express, MongoDB, PostgreSQL, MySQL, Sequelize",
	},
	{
		iconName: "Rocket",
		title: "Frameworks",
		skills: "React.js, Next.js, Laravel",
	},
];
