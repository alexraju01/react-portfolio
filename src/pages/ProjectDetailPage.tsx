import { useParams } from "react-router-dom";

import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetailPage = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) return <h1 className='text-center mt-20'>Project Not Found</h1>;

	return (
		<div className='max-w-4xl mx-auto px-6 py-20'>
			<h1 className='text-5xl font-bold text-gray-900 mb-6'>{project.title}</h1>
			<img src={project.image} className='w-full rounded-xl shadow mb-10' />
			<p className='text-lg text-gray-700 mb-8'>{project.longDescription}</p>

			{/* Tags */}
			<div className='flex flex-wrap gap-2 mb-8'>
				{project.tags.map((tag, i) => (
					<span key={i} className='px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full'>
						{tag}
					</span>
				))}
			</div>

			<div className='flex gap-4'>
				<a href={project.github} className='px-6 py-3 bg-gray-900 text-white rounded-lg flex gap-2'>
					<Github size={18} /> GitHub
				</a>
				<a href={project.demo} className='px-6 py-3 bg-indigo-600 text-white rounded-lg flex gap-2'>
					<ExternalLink size={18} /> Live Demo
				</a>
			</div>
		</div>
	);
};

export default ProjectDetailPage;
