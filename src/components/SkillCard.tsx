import { Code2, Laptop, Rocket } from "lucide-react";

interface SkillCardProps {
	iconName: IconName;
	title: string;
	skills: string;
}

const iconMap = {
	Code2: Code2,
	Laptop: Laptop,
	Rocket: Rocket,
};

export type IconName = keyof typeof iconMap;

const SkillCard = ({ iconName, title, skills }: SkillCardProps) => {
	const IconComponent = iconMap[iconName];
	return (
		<div className='p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition shadow'>
			<IconComponent className='w-10 h-10 text-indigo-600 mb-3 mx-auto' />
			<h3 className='font-bold text-gray-900 text-xl'>{title}</h3>
			<p className='text-gray-600 text-sm mt-2'>{skills}</p>
		</div>
	);
};

export default SkillCard;
