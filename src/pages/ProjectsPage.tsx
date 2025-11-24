import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectsPage = () => {
	return (
		<div className='min-h-screen bg-white px-6 py-20'>
			<h1 className='text-5xl font-extrabold text-center text-gray-900 mb-8'>
				My <span className='text-indigo-600'>Projects</span>
			</h1>

			<p className='text-lg text-gray-600 text-center max-w-2xl mx-auto mb-14 '>
				Here are some of the projects I've built — combining clean UI, strong backend logic, and
				modern tools.
			</p>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
				{projects.map((project, idx) => (
					<Link
						to={`/projects/${project.id}`}
						key={idx}
						className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition block'>
						{/* Project Image */}
						<div className='overflow-hidden group'>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-48 object-cover group-hover:scale-110 transition duration-500'
							/>
						</div>

						<div className='p-6'>
							<h3 className='text-2xl font-bold text-gray-900 mb-2'>{project.title}</h3>
							<p className='text-gray-600 text-sm mb-4'>{project.description}</p>

							{/* Tags */}
							<div className='flex flex-wrap gap-2 mb-4'>
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className='bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium'>
										{tag}
									</span>
								))}
							</div>

							{/* Buttons */}
							<div className='flex items-center gap-4'>
								<button
									onClick={(e) => e.preventDefault()}
									className='flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 cursor-pointer transition'>
									<Github size={18} /> Code
								</button>

								<button
									onClick={(e) => e.preventDefault()}
									className='flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition'>
									<ExternalLink size={18} /> Live Demo
								</button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
